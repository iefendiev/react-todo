import React from 'react';
import './Form.css';
const Form = ({ handleSubmit, handleChange, todo }) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input value={todo} onChange={handleChange} />
      <button type="submit">Ekle</button>
    </form>
  );
};

export default Form;
