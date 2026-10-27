const ETICHETE_NIVEL = { veterinar: "veterinar", alimentatie: "alimentație", igiena: "igienă" };

export default function PetsCard({ pet }) {
  return (
    <li className={pet.gata ? "task-card done" : "task-card"}>
      <div>
        <h3>{pet.titlu}</h3>
        <span className={`badge badge-${pet.eticheta}`}>
          {ETICHETE_NIVEL[pet.eticheta]}
        </span>
      </div>
      <span className="status">{pet.gata ? "Gata" : "Activ"}</span>
    </li>
  );
}