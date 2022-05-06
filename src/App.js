// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
// import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
function App() {

  
  return (
    <div className="App">
      <Navbar elements={["Inicio", "Sobre mi", <Dropdown text={"Categorias"} items={["Shorts", "Top", "Insumos"]} /> ]} />
      <ItemDetailContainer/>
    </div>
  );
}

export default App;


// ItemDetailContainer
// itemDetail