import React from 'react';
import { useDispatch } from 'react-redux';
import { check, remove, uncheck } from '../../features/todo/todoSlice';

export const TodoItem = ({ item: { id, text, isChecked } }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(remove(id));
  };

  const toggleCheck = () => {
    dispatch(!!isChecked ? uncheck(id) : check(id));
  };

  return (
    <div>
      <input type="checkbox" checked={ !!isChecked } onChange={ toggleCheck }/>
      <span title={ `id: ${ id }` }>{ text }</span>
      <button className="btn-transparent" title="remove" onClick={ handleRemove }>&times;</button>
    </div>
  );
};
