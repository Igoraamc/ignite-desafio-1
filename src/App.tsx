import { useState } from 'react';

import { Header } from './components/Header';
import { TodoForm } from './components/TodoForm';
import { InfoWithCounter } from './components/InfoWithCounter';
import { TodoItem } from './components/TodoItem';

import styles from './App.module.css';
import clipboard from './assets/Clipboard.svg';

interface TodoList {
  todoTitle: string;
  done: boolean;
}

function App() {
  const [todoList, setTodoList] = useState<TodoList[]>([]);

  const completedItens = todoList.reduce((counter, todo) => {
    if (todo.done) return counter + 1;
    return counter;
  }, 0);

  function handleNewTodoItem(todoTitle: string) {
    setTodoList([...todoList, {
      todoTitle,
      done: false
    }]);
  }

  function handleToggleTodoItem(index: number) {
    const newTodoList = todoList.map((todoItem, i) => {
      if (i === index) todoItem.done = !todoItem.done;
      return todoItem;
    });
    setTodoList(newTodoList);
  }

  function handleRemoveTodoItem(index: number) {
    const newTodoList = todoList.filter((_, i) => index !== i);
    setTodoList(newTodoList);
  }

  return (
    <div className="App">
      <Header />

      <main className={styles.content}>
        <TodoForm onNewTodoItem={handleNewTodoItem} />

        <div className={styles.todoListInfo}>
          <InfoWithCounter text="Tarefas criadas" counter={todoList.length} />
          <InfoWithCounter text="Concluídas" color="#8284FA" counter={`${completedItens} de ${todoList.length}`} />
        </div>

        { todoList.length > 0 ? (
          <div className={styles.todoList}>
            { todoList.map((todoItem, index) => (
              <TodoItem
                key={`${todoItem.todoTitle}-${index}`}
                todoTitle={todoItem.todoTitle}
                done={todoItem.done}
                onCheckboxClick={() => handleToggleTodoItem(index)}
                onRemoveTodoItem={() => handleRemoveTodoItem(index)}
              />
            )) }
          </div>
        ) : (
          <>
            <hr />

            <div className={styles.emptyTodoList}>
              <img src={clipboard} alt="Clipboard" />
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </>
        ) }
        
      </main>
    </div>
  )
}

export default App
