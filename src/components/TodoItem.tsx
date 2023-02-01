import { Check, Trash } from "phosphor-react";

import styles from './TodoItem.module.css';

interface TodoItemProps {
  todoTitle: string;
  done: boolean;
  onCheckboxClick: () => void;
  onRemoveTodoItem: () => void;
}

export function TodoItem({ todoTitle, done, onCheckboxClick, onRemoveTodoItem }: TodoItemProps) {

  return (
    <div className={styles.todoItem}>
      <div
        className={`${styles.checkIcon} ${done && styles.checked}`}
        onClick={onCheckboxClick}
      >
        { done && <Check size={14} /> }
      </div>
      <p className={`${done && styles.checked}`}>{todoTitle}</p>
      <Trash className={styles.removeIcon} size={16} onClick={onRemoveTodoItem} />
    </div>
  );
}