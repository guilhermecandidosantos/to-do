import { PlusCircle } from "@phosphor-icons/react";
import styles from "./Header.module.css";
import logoImage from "../assets/logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoImage} />

      <form>
        <input type="text" placeholder="Adicione uma nova tarefa" />

        <button>
          Criar
          <PlusCircle size={16} weight="bold" />
        </button>
      </form>
    </header>
  )
}