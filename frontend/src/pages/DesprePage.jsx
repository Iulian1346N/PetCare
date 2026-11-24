import { useTheme } from "../ThemeContext.jsx";
import styles from "./DesprePage.module.css";

export default function DesprePage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <h1>Despre PetCare</h1>
        <button
          type="button"
          onClick={toggleTheme}
          className={styles.themeBtn}
          data-testid="theme-toggle"
        >
          {theme === "dark" ? "☀️ Mod luminos" : "🌙 Mod întunecat"}
        </button>
      </div>

      <p className={styles.description}>
        PetCare este o aplicație web pentru organizarea îngrijirii animalelor, dezvoltată etapizat în cadrul proiectului de Tehnologii Web.
      </p>
      <p className={styles.description}>
        Această aplicație web a fost realizată de studentul Gheorghe Iulian-Ștefan de la grupa 633AB.
      </p>
    </section>
  );
}