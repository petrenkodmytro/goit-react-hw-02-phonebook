import React from 'react';
import PropTypes from 'prop-types';

export const ContactList = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <span>{item.name}</span>
          <span>{item.number}</span>
          <button onClick={()=>onDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
