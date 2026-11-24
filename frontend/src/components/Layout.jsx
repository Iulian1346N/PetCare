import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

function navClass({ isActive }) {
  return isActive ? `${styles.link} ${styles.active}` : styles.link;
}

export default function Layout() {
  return (
    <div className={styles.shell}>
      <header className={styles.topBar}>
        <span className={styles.brandTitle}>PetCare</span>
        <nav className={styles.nav} data-testid="nav">
          <NavLink to="/" end className={navClass}>
            Animale
          </NavLink>
          <NavLink to="/despre" className={navClass}>
            Despre
          </NavLink>
        </nav>
      </header>

      <div className={styles.outletWrap}>
        <Outlet />
      </div>
    </div>
  );
}