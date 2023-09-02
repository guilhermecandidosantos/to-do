import { Check, Trash } from "@phosphor-icons/react";
import styles from "./Task.module.css";

export function Task() {
  return (
    <div className={styles.task}>
      <div className={styles.checkboxChecked}>
        <Check size={12} weight="bold"/>
      </div>
      <p className={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed placeat quo minima expedita debitis earum officiis, libero perspiciatis eum similique facilis voluptate magnam laudantium labore repellat voluptatem ad deleniti eligendi.</p>
      <button className={styles.trash}>
        <Trash size={18} />
      </button>
    </div>
  )
}