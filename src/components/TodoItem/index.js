import React from 'react';

export const TodoItem = ({ item: { id, text, isChecked } }) => {
  const onClick = (event) => {
    console.log(event.target);
  };

  return (
    <div>
      <input type="checkbox" checked={ !!isChecked } onChange={ onClick }/>
      <span>{ id }) { text }</span>
      <button>&times;</button>
    </div>
  );
};
