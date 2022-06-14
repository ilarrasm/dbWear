import React, { useState, createContext } from 'react'
export const GlobalCartContext = createContext("");

const CartContext = ({ children }) => {
  //Este componentes es un proovedor
  const [carrito, setCarrito] = useState([])
  const addItem = (producto, db) => {
    let comparar = carrito.find((prod) => producto.id === prod.id)
    if (comparar) {
      function nuevaCantidad() {
        let cantNew = comparar.cantidad + producto.cantidad
        let nuevoArray = [...carrito]
        let index = nuevoArray.indexOf(comparar)
        console.log(index)
        console.log(nuevoArray[0])
        console.log(producto)
        console.log(cantNew)
        console.log(comparar)
        nuevoArray[index].cantidad = cantNew
        setCarrito(nuevoArray)
      }
      if(comparar.cantidad <= db.stock){
        nuevaCantidad()
      } else{
        console.log("no se puede sumar mas")
      }
      
    } else {
      setCarrito([...carrito, producto])
    }
  }
  ///
  const clear = () => setCarrito([]);
  ///

  const removeItem = (producte) => {
    console.log(carrito)
    console.log(producte)
    let copia = [...carrito].filter((item) => item.id !== producte.id);
    setCarrito(copia)
  };
  const isInCart = (producto) => {
    let comparar = carrito.find((prod) => prod.id = producto.id)
    if (comparar) {
      return true
    } else {
      return false
    }
  }
  function finalPrice(arr) {
    let acumulator = 0;
    arr.map((elem) => {
      return acumulator += elem.precio * elem.cantidad
    })
    return acumulator.toFixed(2)

  }
  function imgF(image) {
    // mostrar imagenes
    const imagenes = require.context("../media", true);
    if (image !== undefined && image) {
      return imagenes(`./${image}`)
    }
  }
  return (
    <GlobalCartContext.Provider value={{ addItem, carrito, clear, removeItem, isInCart, finalPrice, imgF }}>
      {children}
    </GlobalCartContext.Provider>
  )
  //removeItem, addItem, clear, isInCart
  // Dentro de Provider debe ingresar la información e value --> hay que utilizar doble llave "{ { data, ... } }"
}

export default CartContext