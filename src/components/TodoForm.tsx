import { PlusCircle } from 'phosphor-react';
import { FormEvent, useState } from 'react';

import styles from './TodoForm.module.css';

interface TodoFormProps {
  onNewTodoItem: (todoTitle: string) => void;
}

export function TodoForm({ onNewTodoItem }: TodoFormProps) {
  const [todoTitle, setTodoTitle] = useState("");

  function handleNewTodoItem(e: FormEvent) {
    e.preventDefault();

    if (todoTitle === '') {
      alert("A tarefa deve ter um nome válido");
      return;
    }

    onNewTodoItem(todoTitle);
    setTodoTitle("");
  }

  return (
    <form onSubmit={handleNewTodoItem} className={styles.todoForm}>
      <input
        className={styles.newTodoInput}
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={e => setTodoTitle(e.target.value)}
        value={todoTitle}
      />
      <button type='submit' className={styles.buttonCreateTodo}>
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  );
}