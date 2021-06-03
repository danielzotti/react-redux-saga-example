import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { todoAdd } from '../../features/todo/todoSlice';

export const TodoItemAdd = () => {

  const dispatch = useDispatch();

  const textInput = useRef(null);

  const save = (event) => {
    if(event.key === 'Enter' && event?.target?.value) {
      dispatch(todoAdd(event.target.value));
      textInput.current.value = null;
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Press ENTER to save"
        ref={ textInput }
        onKeyPress={ save }/>
    </div>
  );
};
