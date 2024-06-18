import Component from './starter/02-props';

function App() {
  return (
    <main>
      <Component name='peter' id={123}>
        <h2>Hello World</h2>
      </Component>
      <Component name='peter' id={123} />
    </main>
  );
}

export default App;
