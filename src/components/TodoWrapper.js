import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';



const EditTodoForm = ({ task, updateTodo }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTodo(task.id, value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
      />
      <button type="submit">Update</button>
    </form>
  );
};

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodos = [...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }];
    setTodos(newTodos);
    console.log(newTodos);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
    ));
  };

  const updateTodo = (id, newTask) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, task: newTask, isEditing: false } : todo
    ));
  };

  return (
    <div className='Todo-Wrapper'>
      <h1>Get Things Done</h1>

      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => 
        todo.isEditing ? (
          <EditTodoForm 
            key={index} 
            task={todo} 
            updateTodo={updateTodo} 
          />
        ) : (
          <Todo 
            task={todo} 
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;