import { TaskType } from "../App";
import { Task } from "./Task";
import styles from "./Tasks.module.css";
import clipboard from "../assets/clipboard.svg";

interface TasksProps {
  tasks: TaskType[];
  onCompletedTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

export function Tasks({tasks, onCompletedTask, onDeleteTask}: TasksProps) {
  const tasksTotal = tasks.length;

  const tasksCompleted = tasks.filter(task => task.isCompleted).length;

  return (
    <div className={styles.tasks}>
      <header>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasksTotal}</span>
        </div>

        <div>
          <p>Concluídas</p>
          <span>{tasksCompleted} de {tasksTotal}</span>
        </div>
      </header>

      <article>

        {
          tasksTotal === 0 ?
          <div className={styles.tasksEmpty}>
            <img src={clipboard} />
            <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div> :
          tasks.map(task => {
            return (
              <Task 
              key={task.id} 
              task={task} 
              onCompletedTask={onCompletedTask} 
              onDeleteTask={onDeleteTask}
              />
            )
          })
        }
      </article>
    </div>
  )
}