import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteAnimal, fetchAnimalById, updateAnimal } from "../api.js";
import { DETALII_IMPLICITE } from "../constants.js";
import styles from "./AnimalDetaliuPage.module.css";

export default function AnimalDetaliuPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [animal, setAnimal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    let ignore = false;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchAnimalById(id);
        if (!ignore) {
          setAnimal(data);
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message || "Nu s-a putut încărca activitatea.");
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
  }, [id]);

  async function handleToggleGata() {
    if (!animal || updating) return;
    setUpdating(true);
    try {
      const actualizat = await updateAnimal(animal.id, { gata: !animal.gata });
      setAnimal(actualizat);
      setError(null);
    } catch (err) {
      setError(err.message || "Eroare la actualizarea statusului.");
    } finally {
      setUpdating(false);
    }
  }

  async function handleDelete() {
    if (!animal || updating) return;
    setUpdating(true);
    try {
      await deleteAnimal(animal.id);
      navigate("/animale", { replace: true });
    } catch (err) {
      setError(err.message || "Eroare la ștergere.");
      setUpdating(false);
    }
  }

  const etichetaAfisata =
    animal?.eticheta || animal?.categorie || "General";
  const textDetalii = animal?.detalii?.trim() || DETALII_IMPLICITE;

  return (
    <div className={styles.pageWrap}>
      <section className={styles.card} data-testid="detail">
        <div className={styles.topRow}>
          <Link to="/animale" className={styles.backLink}>
            ← Înapoi la activități
          </Link>

          {animal && (
            <span className="badge" data-testid="detaliu-eticheta">
              {etichetaAfisata}
            </span>
          )}
        </div>

        {loading && (
          <p className="info" data-testid="loading">
            Se încarcă detaliile...
          </p>
        )}

        {error && (
          <p className="error" data-testid="error">
            {error}
          </p>
        )}

        {!loading && !error && animal && (
          <>
            <h1
              className={`${styles.title} ${animal.gata ? styles.done : ""}`}
              data-testid="detail-title"
            >
              {animal.titlu}
            </h1>

            <div className={styles.statusRow}>
              <span className={styles.statusLabel}>Status:</span>
              <span
                className={`${styles.statusValue} ${
                  animal.gata ? styles.statusDone : styles.statusActive
                }`}
                data-testid="detaliu-status"
              >
                {animal.gata ? "Finalizată" : "Activă"}
              </span>
            </div>

            <div className={styles.detailsBox} data-testid="detaliu-sectiune">
              <h2 className={styles.detailsHeading}>Detalii</h2>
              <p className={styles.detailsText} data-testid="detaliu-text">
                {textDetalii}
              </p>
            </div>

            <div className={styles.actions}>
              <button
                type="button"
                className="btn"
                onClick={handleToggleGata}
                disabled={updating}
                data-testid="btn-toggle-gata"
              >
                {animal.gata
                  ? "Marchează ca activă"
                  : "Marchează ca finalizată"}
              </button>

              <button
                type="button"
                className="btn-danger"
                onClick={handleDelete}
                disabled={updating}
                data-testid="btn-sterge-detaliu"
              >
                Șterge activitatea
              </button>
            </div>
          </>
        )}
      </section>
    </div>
  );
}