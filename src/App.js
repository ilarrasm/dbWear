import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
function App() {
  return (
    <div className="App">
      <Navbar elements={["Inicio", "Sobre mi", <Dropdown text={"Categorias"} items={["Shorts", "Top", "Insumos"]} /> ]} />
      <ItemListContainer items={ <ItemCount cantidad={40} />}/>
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
