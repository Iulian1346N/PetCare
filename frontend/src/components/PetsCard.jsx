const ETICHETE_NIVEL = { 
  veterinar: "veterinar", 
  alimentatie: "alimentație", 
  igiena: "igienă",
  sanatate: "sănătate" 
};

export default function PetsCard({ pet, onToggle, onDelete }) {
  return (
    <li 
      className={pet.gata ? "pet-card done" : "pet-card"}
      data-testid="item"
      data-id={pet.id}
    >
      <label className="task-main">
        <input
          type="checkbox"
          checked={pet.gata}
          onChange={() => onToggle(pet.id)}
          data-testid="item-toggle"
        />
        <div>
          <h3 data-testid="item-title">{pet.titlu}</h3>
          <span className={`badge badge-${pet.eticheta}`}>
            {ETICHETE_NIVEL[pet.eticheta]}
          </span>
        </div>
      </label>
      <button
        className="btn-danger"
        onClick={() => onDelete(pet.id)}
        aria-label={`Șterge ${pet.titlu}`}
        data-testid="item-delete"
      >
        Șterge
      </button>
    </li>
  );
}