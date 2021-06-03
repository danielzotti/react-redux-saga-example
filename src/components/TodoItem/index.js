import React from 'react';
import { useDispatch } from 'react-redux';
import { todoCheck, todoRemove, todoUncheck } from '../../features/todo/todoSlice';

export const TodoItem = ({ item: { id, text, isChecked } }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(todoRemove(id));
  };

  const toggleCheck = () => {
    dispatch(!!isChecked ? todoUncheck(id) : todoCheck(id));
  };

  return (
    <div>
      <input type="checkbox" checked={ !!isChecked } onChange={ toggleCheck }/>
      <span title={ `id: ${ id }` }>{ text }</span>
      <button className="btn-transparent" title="remove" onClick={ handleRemove }>&times;</button>
    </div>
  );
};
