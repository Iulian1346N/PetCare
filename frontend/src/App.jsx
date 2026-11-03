import { useState } from 'react';
import PetsList from "./components/PetsList.jsx";

const ANIMALE_INITIALE = [
  { id: 1, titlu: "Programare veterinar", gata: false, eticheta: "veterinar" },
  { id: 2, titlu: "Cumpărat hrană", gata: true, eticheta: "alimentatie" },
  { id: 3, titlu: "Spălat blană", gata: false, eticheta: "igiena" },
];

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [animale, setAnimale] = useState(ANIMALE_INITIALE);
  
  const [tema, setTema] = useState(temaInitiala);

  function handleToggle(id) {
    setAnimale((prev) =>
      prev.map((t) => (t.id === id ? { ...t, gata: !t.gata } : t))
    );
  }

  function handleDelete(id) {
    setAnimale((prev) => prev.filter((t) => t.id !== id));
  }

  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  const active = animale.filter((t) => !t.gata).length;
  const gataCount = animale.filter((t) => t.gata).length;

  return (
    <div className="dashboard-layout">
      <header className="app-sidebar">
        <button
          className="theme-toggle"
          onClick={handleTema}
          aria-pressed={tema === "dark"}
        >
          {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
        </button>

        <div className="sidebar-brand">
          <h1>🐾 PetCare</h1>
          <p>Managementul îngrijirii animalelor</p>
        </div>
        <div className="stats-card">
          <div className="stat-item">
            <span>Total</span>
            <strong>{animale.length}</strong>
          </div>
          <div className="stat-item">
            <span>Active</span>
            <strong className="text-active">{active}</strong>
          </div>
          <div className="stat-item">
            <span>Finalizate</span>
            <strong className="text-done">{gataCount}</strong>
          </div>
        </div>
      </header>

      <main className="main-content">
        <header className="content-header">
          <h2>Activități recente</h2>
          <span className="badge-pill">Sistem activ</span>
        </header>
        
        <PetsList 
          animale={animale} 
          onToggle={handleToggle} 
          onDelete={handleDelete} 
        />
      </main>
    </div>
  );
}