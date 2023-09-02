import { useState } from 'react';
import { Header } from './Components/Header'
import { Tasks } from './Components/Tasks'
import './global.css'

export interface TaskType {
  id: number;
  contentTask: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  function onCreateNewTask(contentTask: string) {
    const id = tasks.length + 1;
    const isCompleted = false;
    const task = {id, contentTask, isCompleted};


    setTasks([...tasks, task]);
  }
  console.log(tasks)
  function onCompletedTask(id: number) {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
        return task;
      } else {
        return task;
      }
    })

    setTasks(newTasks)
  }

  function onDeleteTask(id: number) {
    const newTasks = tasks.filter(task => task.id !== id);

    setTasks(newTasks);
  }

  return (
    <div>
      <Header onCreateNewTask={onCreateNewTask} />
      <Tasks 
        tasks={tasks} 
        onCompletedTask={onCompletedTask} 
        onDeleteTask={onDeleteTask} 
      />
    </div>
  )
}

export default App
