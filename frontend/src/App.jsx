import { useEffect, useState } from "react";
import PetsList from "./components/PetsList.jsx";
import PetsForm from "./components/PetsForm.jsx";
import { createAnimal, deleteAnimal, fetchAnimale, updateAnimal } from "./api.js";

export default function App() {
  const [animale, setAnimale] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  useEffect(() => {
    let ignore = false;
    async function load() {
      try {
        const data = await fetchAnimale();
        if (!ignore) setAnimale(data);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    load();
    return () => {
      ignore = true;
    };
  }, []);

  async function handleAdd(animal) {
    const creat = await createAnimal(animal);
    setAnimale((prev) => [...prev, creat]);
  }

  async function handleToggle(id) {
    const animal = animale.find((t) => t.id === id);
    try {
      const actualizat = await updateAnimal(id, { gata: !animal.gata });
      setAnimale((prev) => prev.map((t) => (t.id === id ? actualizat : t)));
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteAnimal(id);
      setAnimale((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      setError(err.message);
    }
  }

  const active = animale.filter((t) => !t.gata).length;
  const doneCount = animale.filter((t) => t.gata).length;

  return (
    <div className="dashboard-layout">
      {/* SIDEBAR-UL DIN STÂNGA */}
      <aside className="app-sidebar">
        <div className="sidebar-logo">
          <img src="/logo.png" alt="PetCare Logo" />
          <div className="sidebar-brand">
            <h1>PetCare</h1>
            <p>Managementul îngrijirii animalelor.</p>
          </div>
        </div>

        <div className="stats-card">
          <div className="stat-item">
            <span>Total elemente</span>
            <strong>{animale.length}</strong>
          </div>
          <div className="stat-item">
            <span>Active</span>
            <strong className="text-active">{active}</strong>
          </div>
          <div className="stat-item">
            <span>Finalizate</span>
            <strong className="text-done">{doneCount}</strong>
          </div>

          <button onClick={toggleTheme} className="theme-toggle" data-testid="theme-toggle" style={{ marginTop: "10px", width: "100%" }}>
            {theme === "dark" ? "☀️ Mod Luminos" : "🌙 Mod Întunecat"}
          </button>
        </div>

        <div>
          <h2 style={{ fontSize: "1.2rem", marginBottom: "16px", color: "var(--text-light)" }}>
            Adaugă activitate
          </h2>
          <PetsForm onAdd={handleAdd} />
        </div>

        <div style={{ marginTop: "auto", textAlign: "center", paddingTop: "15px" }}>
          <img src="/pug-nyan.gif" alt="Pug Nyan" style={{ width: "100%", maxWidth: "200px", borderRadius: "12px" }} />
        </div>
      </aside>

      {/* CONȚINUTUL PRINCIPAL DIN DREAPTA */}
      <main className="main-content">
        <div className="content-header">
          <h2>Activități recente</h2>
          <div className="badge-pill" data-testid="app-count">
            {active} active din {animale.length}
          </div>
        </div>

        {loading && (
          <p className="info" data-testid="loading">
            Se încarcă...
          </p>
        )}
        {error && (
          <p className="error" data-testid="error">
            {error}
          </p>
        )}
        {!loading && (
          <PetsList
            animale={animale}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        )}
      </main>
    </div>
  );
}