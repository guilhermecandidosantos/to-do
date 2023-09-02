import { PlusCircle } from "@phosphor-icons/react";
import styles from "./Header.module.css";
import logoImage from "../assets/logo.svg";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface HeaderProps {
  onCreateNewTask: (contentTask:string) => void;
}

export function Header({ onCreateNewTask }: HeaderProps) {
  const [ task, setTask ] = useState("");

  const taskLength = task.trim().length === 0;

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setTask(event.target.value)
  }

  function handleNewTaskInvalid (event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  function handleNewTask(event: FormEvent){
    event.preventDefault();
    
    onCreateNewTask(task);
    
    setTask("");
    }

  return (
    <header className={styles.header}>
      <img src={logoImage} />

      <form onSubmit={handleNewTask} >
        <input 
        type="text" 
        placeholder="Adicione uma nova tarefa" 
        value={task}
        onInvalid={handleNewTaskInvalid}
        onChange={handleNewTaskChange}
        required
      />

        <button type="submit" disabled={taskLength}>
          Criar
          <PlusCircle size={16} weight="bold" />
        </button>
      </form>
    </header>
  )
}