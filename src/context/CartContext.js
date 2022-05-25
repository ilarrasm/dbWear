import React,{useState, createContext} from 'react'
export const GlobalCartContext = createContext("");

const CartContext = ({children}) => {
    //Este componentes es un proovedor
    const [carrito, setCarrito] = useState([])  
    const addItem = (producto) =>{
    let comparar = carrito.find( (prod) => producto.id === prod.id)
    if(comparar){
       function nuevaCantidad(){
         let cantNew = comparar.stock + producto.stock
         let nuevoArray = [...carrito]
         nuevoArray.indexOf(comparar).push(comparar.stock = cantNew)
         setCarrito(nuevoArray)
       }
       nuevaCantidad()
    }else{
      setCarrito([ ...carrito, producto])
    } 
  }
  const clear = ()=> setCarrito([]);
  const removeItem = (producte) => {
    let index = [ ...carrito].indexOf(producte)
    let array = carrito.splice(index, 1)  
    setCarrito(array)
    if(carrito.length = 1){
      setCarrito([]);
    }
  }; 
  const isInCart = (producto)=>{
    let comparar = carrito.find( (prod) => prod.id = producto.id)
    if(comparar){
      return true
    }else{
      return false
    }
  }
  return (
    <GlobalCartContext.Provider value={{addItem, carrito, clear, removeItem, isInCart}}>
        {children}
    </GlobalCartContext.Provider>
  )
  //removeItem, addItem, clear, isInCart
  // Dentro de Provider debe ingresar la información e value --> hay que utilizar doble llave "{ { data, ... } }"
}

export default CartContext