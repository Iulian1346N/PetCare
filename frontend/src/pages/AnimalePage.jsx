import { useEffect, useState } from "react";
import PetsList from "../components/PetsList.jsx";
import PetsForm from "../components/PetsForm.jsx";
import { useTheme } from "../ThemeContext.jsx";
import {
  createAnimal,
  deleteAnimal,
  fetchAnimale,
  updateAnimal,
} from "../api.js";
import styles from "./AnimalePage.module.css";

export default function AnimalePage() {
  const [animale, setAnimale] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        const data = await fetchAnimale();
        if (!ignore) {
          setAnimale(Array.isArray(data) ? data : []);
          setError(null);
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
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
    if (!animal) return;
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
    <div className={styles.dashboardLayout}>
      <aside className={styles.sidebar}>
        <button
          type="button"
          onClick={toggleTheme}
          className={styles.themeBtn}
          data-testid="theme-toggle"
        >
          {theme === "dark" ? "☀️ Mod luminos" : "🌙 Mod întunecat"}
        </button>

        <div className={styles.logoRow}>
          <img src="/logo.png" alt="PetCare Logo" className={styles.logoImg} />
          <div>
            <h1 className={styles.brandName}>PetCare</h1>
            <p className={styles.brandSub}>Managementul îngrijirii animalelor</p>
          </div>
        </div>

        <div className={styles.statsCard}>
          <div className={styles.statItem}>
            <span>Total</span>
            <strong>{animale.length}</strong>
          </div>
          <div className={styles.statItem}>
            <span>Active</span>
            <strong className={styles.textActive}>{active}</strong>
          </div>
          <div className={styles.statItem}>
            <span>Finalizate</span>
            <strong className={styles.textDone}>{doneCount}</strong>
          </div>
        </div>

        <div className={styles.formBox}>
          <h2 className={styles.formTitle}>Adaugă activitate</h2>
          <PetsForm onAdd={handleAdd} />
        </div>

        <div className={styles.pugWrap}>
          <div className={styles.pugFrame} title="Nyan Pug!">
            <img src="/pug-nyan.gif" alt="Pug Nyan" className={styles.pugImg} />
          </div>
        </div>
      </aside>

      <main className={styles.mainContent}>
        <div className={styles.contentHeader}>
          <h2>Activități recente</h2>
          <span className={styles.statusPill} data-testid="app-count">
            Sistem activ ({active} active)
          </span>
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