import { useState } from 'react';

type Person = {
  name: string;
};

function Component() {
  const [text, setText] = useState(''); //infer type
  const [email, setEmail] = useState(''); //infer type

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    // const formData = new FormData(e.target as HTMLFormElement);

    const data = Object.fromEntries(formData);
    console.log(data);
    // const text = formData.get('text') as string;
    const email = formData.get('email') as string;
    const person: Person = { name: data.text as string };
    console.log(person);
    console.log(email);
  };

  return (
    <div>
      <h2>Events Example</h2>
      <form className='form' onSubmit={handleSubmit}>
        <input
          name='text'
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
          name='email'
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
