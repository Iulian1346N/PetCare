import { useState } from "react";

const ETICHETE = [
  { value: "veterinar", label: "Veterinar" },
  { value: "alimentatie", label: "Alimentație" },
  { value: "igiena", label: "Igienă" },
  { value: "sanatate", label: "Sănătate" },
];

const TITLU_MAX = 100;

export default function PetsForm({ onAdd }) {
  const [titlu, setTitlu] = useState("");
  const [eticheta, setEticheta] = useState("igiena");
  const [eroare, setEroare] = useState("");
  const [trimite, setTrimite] = useState(false);

  function valideaza() {
    const t = titlu.trim();
    if (t === "") return "Titlul este obligatoriu.";
    if (t.length > TITLU_MAX) return `Titlul are maximum ${TITLU_MAX} de caractere.`;
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const mesaj = valideaza();
    if (mesaj) {
      setEroare(mesaj);
      return;
    }
    setEroare("");
    setTrimite(true);
    try {
      await onAdd({ titlu: titlu.trim(), eticheta, gata: false });
      setTitlu("");
      setEticheta("igiena");
    } catch (err) {
      setEroare(err.message);
    } finally {
      setTrimite(false);
    }
  }

  return (
    <form className="task-form" onSubmit={handleSubmit} noValidate data-testid="form">
      <label>
        Titlu
        <input
          type="text"
          value={titlu}
          onChange={(e) => setTitlu(e.target.value)}
          placeholder="Ex: Programare cabinet"
          maxLength={TITLU_MAX}
          aria-invalid={Boolean(eroare)}
          data-testid="form-title"
        />
      </label>
      <label>
        Etichetă
        <select
          value={eticheta}
          onChange={(e) => setEticheta(e.target.value)}
          data-testid="form-eticheta"
        >
          {ETICHETE.map((e) => (
            <option key={e.value} value={e.value}>
              {e.label}
            </option>
          ))}
        </select>
      </label>
      {eroare && (
        <p className="error" data-testid="form-error">
          {eroare}
        </p>
      )}
      <button type="submit" disabled={trimite} data-testid="form-submit">
        {trimite ? "Se salvează..." : "Adaugă"}
      </button>
    </form>
  );
}