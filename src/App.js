import './App.css';

function App() {
  const amount = 5;
  return (
    <div className="App">
        <button>Increment</button>
        <button>Decrement</button>
        <button>IncrementBy {amount}</button>
    </div>
  );
}

export default App;
