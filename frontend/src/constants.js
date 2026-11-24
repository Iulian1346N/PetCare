export const ETICHETE = [
  { value: "veterinar", label: "Veterinar" },
  { value: "alimentatie", label: "Alimentație" },
  { value: "igiena", label: "Igienă" },
  { value: "sanatate", label: "Sănătate" },
];

export const ETICHETE_MAP = Object.fromEntries(
  ETICHETE.map((item) => [item.value, item.label])
);

export const DETALII_IMPLICITE =
  "Nu sunt necesare detalii suplimentare pentru această activitate.";
