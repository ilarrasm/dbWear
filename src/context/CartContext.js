import React,{useState, createContext, useEffect} from 'react'
export const GlobalCartContext = createContext("");

const CartContext = ({children}) => {
    //Este componentes es un proovedor
  const [carrito, setCarrito] = useState([])  
  const addItem = (producto) =>{
    let comparar = carrito.find( (prod) => prod.id = producto.id)
    console.log(comparar);
   if(comparar){
      function nuevaCantidad(){
        let cantNew = comparar.cantidad + producto.cantidad
        let nuevoArray = [...carrito]
        nuevoArray.indexOf(comparar).push(comparar.cantidad = cantNew)
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