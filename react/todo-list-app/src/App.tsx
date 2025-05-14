import './App.css'
import { TodoItem } from './components/Todoitem';

export default function App() {
  const todos = [
    { id: 1, todo: 'Belajar React', status: 0, isDeleted: 0 },
    { id: 2, todo: 'Belajar Project', status: 1, isDeleted: 0 },
    { id: 3, todo: 'Belajar Vite', status: 0, isDeleted: 0 },
    { id: 6, todo: 'Belajar JS', status: 0, isDeleted: 1 },
  ];
  
  const onHandleMarkDone = (id: number) => {
    console.log(`Todo with id: ${id} is marked to Done`);
  }

  const onHandDelete = (id: number) => {
    console.log(`Todo with id: ${id} is Deleted`);
  }

  return (
    <div>
      <h1>List Todo App</h1>
      <button onClick={() => {}}>+ Add Todo</button>

      <ul>
        {todos
          .filter(todo => todo.isDeleted === 0)
          .map(todo => (
            <TodoItem
              key={todo.id}
              {...todo}
              onMarkDone={onHandleMarkDone}
              onDelete={onHandDelete}
            />
        ))}
      </ul>
    </div>
  );
}
