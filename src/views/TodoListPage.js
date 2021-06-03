import React from 'react';
import { useSelector } from 'react-redux';
import { TodoItem } from '../components/TodoItem';
import { TodoItemAdd } from '../components/TodoItemAdd';

export const TodoListPage = () => {
  const todoList = useSelector((state) => state.todo);

  return (
    <div>
      <h1>Welcome to TodoListPage</h1>
      <TodoItemAdd/>
      <div>
        { todoList?.map(i => <TodoItem key={ i.id } item={ i }/>) }
      </div>
    </div>
  );
};
