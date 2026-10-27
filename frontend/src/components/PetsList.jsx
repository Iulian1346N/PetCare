export default function PetsList({ animale }) {
  return (
    <div className="pets-grid">
      {animale.map((item) => (
        /* Adăugăm clasa 'done' dinamic dacă item.gata este true */
        <div key={item.id} className={`pet-card ${item.gata ? 'done' : ''}`}>
          <div className="card-body">
            <span className={`badge badge-${item.eticheta}`}>
              {item.eticheta}
            </span>
            {}
            <h3>{item.titlu}</h3>
          </div>
          <div className="card-footer">
            <span className="status-indicator">
              {item.gata ? "Gata" : "Activ"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}