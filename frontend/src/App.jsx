import { useState } from 'react';
import PetsList from "./components/PetsList.jsx";


const animale = [
  { id: 1, titlu: "Vaccinare antirabică", gata: false, eticheta: "veterinar" },
  { id: 2, titlu: "Cumpărare hrană", gata: true, eticheta: "alimentatie" },
  { id: 3, titlu: "Spălat blană", gata: false, eticheta: "igiena" }
];

export default function App() {
  const active = animale.filter((t) => !t.gata).length;
  const gataCount = animale.filter((t) => t.gata).length;

  return (
    <div className="dashboard-layout">
      <header className="app-sidebar">
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
        <PetsList animale={animale} />
      </main>
    </div>
  );
}