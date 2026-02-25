import React, { useState, type ChangeEvent } from 'react';

interface TodoFormProps {
  onAdd: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const [text, setText] = useState<string>('');

  const handleSubmit = (e: React.SyntheticEvent) => {
  e.preventDefault();
  if (text.trim()) {
    onAdd(text);
    setText('');
  }
};

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Введите новую задачу..."
        value={text}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn-add">
        Добавить
      </button>
    </form>
  );
};

export default TodoForm;