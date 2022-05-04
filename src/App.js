import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import ItemListContainer from './components/ItemListContainer';
import Item from "./components/Item"
function App() {
  return (
    <div className="App">
      <Navbar elements={["Inicio", "Sobre mi", <Dropdown text={"Categorias"} items={["Shorts", "Top", "Insumos"]} /> ]} />
      <ItemListContainer/>
     
    </div>
  );
}

export default App;
