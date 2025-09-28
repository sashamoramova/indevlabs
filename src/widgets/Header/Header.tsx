import { CLIENT_ROUTES } from "@/shared/enums/clientRoutes";
import styles from "./Header.module.css";
import { JSX } from "react";
import { NavLink } from "react-router";

export default function Header(): JSX.Element {
  return (
    <nav className={styles.container}>
      <NavLink
        to={CLIENT_ROUTES.MAIN}
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Home
      </NavLink>

      <NavLink
        to={CLIENT_ROUTES.TASKS}
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Tasks
      </NavLink>
    </nav>
  );
}
