import { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Filters from './components/Filters';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './style.css'

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export type Filters = 'all' | 'active' | 'completed';

function App () {
  const [todos, setTodos = useState<Todo[]>([])];
  const [filter, setFilter] = useState<Filter>('all');

  useEffect(() => {
    const savedTools = localStorage.getItem('todos');
    if (savedTools) {
      try {
        setTodos(JSON.parse(savedTools));
      } catch (e) {
        console.error('Ошибка при загрузке задач');
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos' , JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text:string) => {
    if (!text.trim()) return;
    const newTodo: Todo = {
      id: Date.now().toString(),
      text: text.trim(),
      completed: false,
    };
    setTodos((prev) => prev.map((todo) => todo.id === id ? {...todo, completed: !Todo.completed}:todo)
  };
};

