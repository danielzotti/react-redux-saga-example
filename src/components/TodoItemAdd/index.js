import React, { useRef } from 'react';

export const TodoItemAdd = (props) => {
  const textInput = useRef(null);
  const save = (event) => {
    if(event.key === 'Enter') {
      console.log(event.target.value);
      textInput.current.value = null;
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Insert what you want to do"
        ref={ textInput }
        onKeyPress={ save }/>
    </div>
  );
};
