import { useState } from "react";
import { ETICHETE } from "../constants.js";
import styles from "./PetsForm.module.css";

const TITLU_MAX = 100;

export default function PetsForm({ onAdd }) {
  const [titlu, setTitlu] = useState("");
  const [eticheta, setEticheta] = useState(ETICHETE[0]?.value ?? "veterinar");
  const [detalii, setDetalii] = useState("");
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  function validate() {
    const curat = titlu.trim();
    if (!curat) {
      return "Titlul este obligatoriu.";
    }
    if (curat.length > TITLU_MAX) {
      return `Titlul are maximum ${TITLU_MAX} de caractere.`;
    }
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const mesaj = validate();
    if (mesaj) {
      setError(mesaj);
      return;
    }

    setError(null);
    setSubmitting(true);
    try {
      const detaliiCurate = detalii.trim();
      const payload = {
        titlu: titlu.trim(),
        eticheta,
        gata: false,
      };
      if (detaliiCurate) {
        payload.detalii = detaliiCurate;
      }

      await onAdd(payload);
      setTitlu("");
      setEticheta(ETICHETE[0]?.value ?? "veterinar");
      setDetalii("");
    } catch (err) {
      setError(err.message || "Eroare la salvare.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      noValidate
      data-testid="form"
    >
      <label>
        Titlu
        <input
          type="text"
          value={titlu}
          onChange={(e) => setTitlu(e.target.value)}
          placeholder="Ex: Control veterinar Luna"
          maxLength={TITLU_MAX}
          aria-invalid={Boolean(error)}
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
          {ETICHETE.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </label>

      <label>
        Detalii (opțional)
        <textarea
          rows={3}
          value={detalii}
          onChange={(e) => setDetalii(e.target.value)}
          placeholder="Ex: Analize de sânge sau observații..."
          data-testid="form-detalii"
        />
      </label>

      {error && (
        <p className="error" data-testid="form-error">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="btn"
        disabled={submitting}
        data-testid="form-submit"
      >
        {submitting ? "Se salvează..." : "Adaugă"}
      </button>
    </form>
  );
}