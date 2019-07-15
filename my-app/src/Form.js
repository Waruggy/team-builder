import React, { useState } from 'react';

const Form = () => {
  const [inputValue, setInputValue] = useState("");

  const changeHandler = event => {
    setInputValue(event.target.value);
  };

  return (
    <div className="App">
      <form>
        <label>
          Best Member:
          <input type="text" onChange={changeHandler} />
        </label>
      </form>
    </div>
  );
};

export default Form;