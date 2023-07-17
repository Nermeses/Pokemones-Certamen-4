import Card from '../src/componentes/Card'

function App() {
  const pokemonNumbers = [30, 2, 57, 72, 13, 5, 45, 32, 11, 97];

  
  return (
    <div className="App">
      {pokemonNumbers.map((number) => (
        <Card key={number} pokemonNumber={number} />
      ))}
    </div>
  );
}

export default App;
