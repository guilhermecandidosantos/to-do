import { Check, Trash } from "@phosphor-icons/react";
import styles from "./Task.module.css";
import { TaskType } from "../App";

interface TaskProps {
  task: TaskType;
  onCompletedTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
}


export function Task({ task, onCompletedTask, onDeleteTask }: TaskProps) {
  return (
    <div className={styles.task} >
      <div onClick={() => {
        onCompletedTask(task.id);
      }} className={task.isCompleted ? styles.checkboxChecked : styles.checkboxUnchecked}>
        {task.isCompleted ? <Check size={12} weight="bold"/> : null}
      </div>
      <p className={task.isCompleted ? styles.contentChecked : styles.content}>{task.contentTask}</p>
      <button onClick={() => onDeleteTask(task.id)} className={styles.trash}>
        <Trash size={18} />
      </button>
    </div>
  )
}