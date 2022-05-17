import React, { useContext } from 'react'
import {GlobalCartContext} from '../context/CartContext'

function Cart() {
  const {carrito, clear, removeItem} = useContext(GlobalCartContext)
  return (
    <div>
      {
       carrito.length > 0 || carrito !== undefined ? carrito.map((prod) =>(<span key={prod.id}>{prod.cantidad}{prod.nombre} <button onClick={() => removeItem(prod)} >borrar</button > </span>)): <p>nada</p>
      }
      <button onClick={clear}> borra todo</button>
    </div>
  )
}

export default Cart