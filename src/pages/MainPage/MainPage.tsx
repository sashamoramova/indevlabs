import { JSX } from "react";
import styles from "./MainPage.module.css";

export function MainPage(): JSX.Element {
  return (
    <>
      <h1 className={styles.title}>Task Dashboard Mini-App</h1>
      <div className={styles.container}>
        <p className={styles.description}>
          This React mini-app allows you to view, search, and explore a list of
          tasks. You can filter tasks using the search input, and click any task
          to see its details. The app uses modern React features, including
          functional components, hooks, and client-side routing. All data is
          locally mocked for demonstration purposes.
        </p>
        <ul className={styles.features}>
          <li>Task list with search and filter</li>
          <li>Task details view via routing</li>
          <li>Custom hook for data access</li>
          <li>Accessible UI (aria attributes)</li>
          <li>Fast and simple user experience</li>
        </ul>
      </div>
    </>
  );
}
