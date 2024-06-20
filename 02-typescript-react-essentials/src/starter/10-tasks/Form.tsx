import React, { FormEvent, useState } from 'react';
import { type FormProps } from './types';

function Form({ addTask }: FormProps) {
  const [inputValue, setInputValue] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!inputValue.trim()) {
      setErrorMessage('Input cannot be empty');
      return;
    }

    // Add task
    addTask({
      id: new Date().getTime().toString(),
      description: inputValue,
      isCompleted: false,
    });

    setErrorMessage('');
    alert(`Submitted value: ${inputValue}`);
    setInputValue(''); // Reset the input after submission
  };
  return (
    <form className='form' onSubmit={handleSubmit}>
      <div>
        <label htmlFor='inputField'>Enter something:</label>
        <input
          type='text'
          id='inputField'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <button type='submit' className='btn'>
        Add task
      </button>
    </form>
  );
}

export default Form;
