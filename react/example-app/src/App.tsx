import './App.css'
import { useState } from 'react'; 
import { TodoItem } from './components/Todoitem';

 export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, todo: 'Belajar React', status: 1, isDeleted: 0},
    { id: 2, todo: 'Belajar Project', status: 0, isDeleted: 0},
    { id: 3, todo: 'Belajar Vite', status: 1, isDeleted: 0},
    { id: 4, todo: 'Belajar JS', status: 0, isDeleted: 0},
    { id: 5, todo: 'Belajar HTML', status: 1, isDeleted: 0},
    { id: 6, todo: 'Belajar Python', status: 0, isDeleted: 0},
    { id: 7, todo: 'Belajar Php', status: 0, isDeleted: 0},
    { id: 8, todo: 'Belajar Java', status: 0, isDeleted: 0},
    { id: 9, todo: 'Belajar C++', status: 0, isDeleted: 0},
    { id: 10, todo:'Belajar Canva', status: 0, isDeleted: 0},
 ]);

  const onHandleMarkDone = (id: number) => {
    setTodos(todos.map(todo=>
     todo.id === id ? { ...todo, status:1 } : todo
    ));
  };

  const onHandleDelete = (id: number) => {
    setTodos(todos.map(todo =>
     todo.id === id ? {...todo, isDeleted: 1 } : todo
    ));
  };

  return (
      <div>
        <h1>Todo List</h1>
        <button onClick={() => {}}>+ Add Todo</button>

        <ul>
          { todos 
            .filter(todo => todo.isDeleted === 0)
            .map(todo => (
              <TodoItem
                key={todo.id}
                {...todo}
                onMarkDone={onHandleMarkDone}
                onDelete={onHandleDelete}
              />
            ))}
        </ul>
      </div>
  );
}