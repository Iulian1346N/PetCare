import PetsCard from "./PetsCard.jsx";

export default function PetsList({ animale = [], onToggle, onDelete }) {
  const listaValida = Array.isArray(animale) ? animale.filter(Boolean) : [];

  if (listaValida.length === 0) {
    return (
      <p className="empty" data-testid="empty">
        Nu există niciun element.
      </p>
    );
  }

  return (
    <ul
      style={{
        listStyle: "none",
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
        gap: "18px",
      }}
      data-testid="pets-list"
    >
      {listaValida.map((animal, index) => (
        <PetsCard
          key={animal.id ?? index}
          animal={animal}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}