import styles from "./Header.module.css";

import todoLogo from "../assets/TodoLogo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Logotipo todo app" />
    </header>
  );
}