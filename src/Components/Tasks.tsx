import { Task } from "./Task";
import styles from "./Tasks.module.css";


export function Tasks() {
  return (
    <div className={styles.tasks}>
      <header>
        <div>
          <p>Tarefas criadas</p>
          <span>5</span>
        </div>

        <div>
          <p>Concluídas</p>
          <span>2 de 5</span>
        </div>
      </header>

      <article>
        <Task />
        <Task />
        <Task />
      </article>
    </div>
  )
}