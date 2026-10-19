const animale = [
  { id: 1, titlu: "Vaccinare antirabică ", gata: false, eticheta: "veterinar" },
  { id: 2, titlu: "Cumpărare hrană", gata: true, eticheta: "alimentatie" },
  { id: 3, titlu: "Spălat blană", gata: false, eticheta: "igiena" }
];

export default function App() {
  const active = animale.filter((t) => !t.gata).length;

  return (
    <>
      <header className="app-header">
        <h1>PetCare</h1>
        <p>Aplicație de gestiune a îngrijirii animalelor de companie.</p>
        <p className="app-count">
          {animale.length} activități, dintre care {active} active
        </p>
      </header>
      <main className="container">
        <section className="panel">
          <h2>Activitățile mele</h2>
          {/* Temporar: date brute; componentele apar în Etapa 4 */}
          <pre>{JSON.stringify(animale, null, 2)}</pre>
        </section>
      </main>
    </>
  );
}