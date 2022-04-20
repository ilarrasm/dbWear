import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
function App() {
  let button = <Dropdown text={"Categorias"} items={["Shorts", "Top", "Insumos"]} />
  return (
    <div className="App">
      <Navbar elements={["Inicio", "Sobre mi", "Carrito", button]} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        
      </header>
    </div>
  );
}

export default App;
