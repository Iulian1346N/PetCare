export default function PetsList({ animale }) {
  if (!animale || animale.length === 0) {
    return <p className="empty">Nu există niciun animal în listă.</p>;
  }

  return (
    <div className="pets-grid">
      {animale.map((item) => (
        <div key={item.id} className={`pet-card ${item.gata ? 'done' : ''}`}>
          <div className="card-body">
            <span className={`badge badge-${item.eticheta}`}>
              {item.eticheta}
            </span>
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