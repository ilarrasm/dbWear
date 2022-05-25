import './App.css';
import CartContext from './context/CartContext';
import Rutas from './routes/Rutas';
function App() {

  return (
      <CartContext>
          <Rutas></Rutas>
      </CartContext>

  );
}

export default App;


// ItemDetailContainer
// itemDetail