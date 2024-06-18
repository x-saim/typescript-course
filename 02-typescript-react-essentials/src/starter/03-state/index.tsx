import { useState } from 'react';

type Link = {
  id: number;
  url: string;
  text: string;
};

const navLinks: Link[] = [
  {
    id: 1,
    url: 'some url',
    text: 'some text',
  },
  {
    id: 2,
    url: 'some url2',
    text: 'some text2',
  },
  {
    id: 3,
    url: 'some url3',
    text: 'some text3',
  },
];

function Component() {
  const [text, setText] = useState('shake');
  const [number, setNumber] = useState(1);
  const [list, setList] = useState<string[]>([]);
  const [links, setLinks] = useState<Link[]>(navLinks);

  return (
    <div>
      <h2 className='mb-1'>React & Typescript</h2>
      <button
        className='btn btn-center'
        onClick={() => {
          setText('hello');
          setNumber(23);
          setList(['hello', 'world']);
          setLinks([...links, { id: 4, url: 'hello', text: 'hello' }]);
          //setLinks([...links, { id: 4, url: 'hello' }]);
        }}
      >
        Click Me
      </button>
      <h2>State</h2>
    </div>
  );
}
export default Component;
