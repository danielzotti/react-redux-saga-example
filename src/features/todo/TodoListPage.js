import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TodoItem } from '../../components/TodoItem';
import { TodoItemAdd } from '../../components/TodoItemAdd';
import { fetch } from './todoSlice';

export const TodoListPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch());
  }, []);

  const todoList = useSelector((state) => state.todo.items);

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
