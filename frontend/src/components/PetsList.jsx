import PetsCard from "./PetsCard.jsx";

export default function PetsList({ animale, onToggle, onDelete }) {
  if (!animale || animale.length === 0) {
    return <p className="empty">Nu există niciun animal în listă.</p>;
  }

  return (
    <div className="pets-grid">
      {animale.map((item) => (
        <PetsCard
          key={item.id}
          pet={item}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}