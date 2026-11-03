const ETICHETE_NIVEL = { veterinar: "veterinar", alimentatie: "alimentație", igiena: "igienă" };

export default function PetsCard({ pet, onToggle, onDelete }) {
  return (
    <li className={pet.gata ? "pet-card done" : "pet-card"}>
      <label className="task-main">
        <input
          type="checkbox"
          checked={pet.gata}
          onChange={() => onToggle(pet.id)}
        />
        <div>
          <h3>{pet.titlu}</h3>
          <span className={`badge badge-${pet.eticheta}`}>
            {ETICHETE_NIVEL[pet.eticheta]}
          </span>
        </div>
      </label>
      <button
        className="btn-danger"
        onClick={() => onDelete(pet.id)}
        aria-label={`Șterge ${pet.titlu}`}
      >
        Șterge
      </button>
    </li>
  );
}