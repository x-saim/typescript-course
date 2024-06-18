import { useState } from 'react';

function Component() {
  const [text, setText] = useState(''); //infer type
  const [email, setEmail] = useState(''); //infer type

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  return (
    <div>
      <h2>Events Example</h2>
      <form className='form'>
        <input
          type='text'
          className='form-input mb-1'
          placeholder='Enter Text'
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <input
          type='email'
          className='form-input mb-1'
          placeholder='Enter Email'
          value={email}
          onChange={handleChange}
        />
        <button type='submit' className='btn btn-block'>
          Submit
        </button>
      </form>
    </div>
  );
}
export default Component;
