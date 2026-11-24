import { useState } from "react";
import { Link } from "react-router-dom";
import { DETALII_IMPLICITE } from "../constants.js";
import styles from "./PetsCard.module.css";

export default function PetsCard({ animal, onToggle, onDelete }) {
  const [showDetails, setShowDetails] = useState(false);

  if (!animal) {
    return null;
  }

  const etichetaAfisata = animal.eticheta || animal.categorie || "General";
  const textDetalii = animal.detalii?.trim() || DETALII_IMPLICITE;

  return (
    <li
      className={`${styles.card} ${animal.gata ? styles.done : ""}`}
      data-testid="item"
      data-id={animal.id}
    >
      <div className={styles.left}>
        <input
          type="checkbox"
          checked={Boolean(animal.gata)}
          onChange={() => onToggle(animal.id)}
          className={styles.checkbox}
          aria-label={`Marchează ${animal.titlu}`}
          data-testid="item-toggle"
        />

        <div className={styles.content}>
          <Link
            to={`/animale/${animal.id}`}
            className={styles.title}
            data-testid="item-link"
          >
            {animal.titlu}
          </Link>

          <div className={styles.metaRow}>
            <span className="badge" data-testid="badge-categorie">
              {etichetaAfisata}
            </span>

            <button
              type="button"
              className={styles.detailsToggle}
              onClick={() => setShowDetails((prev) => !prev)}
              data-testid="toggle-detalii"
            >
              {showDetails ? "Ascunde detalii" : "Vezi detalii"}
            </button>
          </div>

          {showDetails && (
            <p className={styles.detailsNote} data-testid="card-detalii">
              {textDetalii}
            </p>
          )}
        </div>
      </div>

      <button
        type="button"
        className="btn-danger"
        onClick={() => onDelete(animal.id)}
        aria-label={`Șterge ${animal.titlu}`}
        data-testid="item-delete"
      >
        Șterge
      </button>
    </li>
  );
}