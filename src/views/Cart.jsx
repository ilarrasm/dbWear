import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { GlobalCartContext } from '../context/CartContext'
import {RiDeleteBin2Fill} from 'react-icons/ri'

function Cart() {
  const { carrito, clear, removeItem } = useContext(GlobalCartContext)
  function finalPrice(arr){
    let acumulator = 0; 
    arr.map((elem)=>{
      acumulator += elem.precio * elem.cantidad
    })
    return acumulator.toFixed(2)

  }
  return (
    <div className='flex flex-col items-start text-neutral-700'>
      <h1 className='text-2xl py-5 my-10 self-start ml-5'>Carrito de compras</h1>
      {
        carrito.length > 0 && carrito !== undefined ?
          <>
            <Link to="/"> Seguir comprando </Link>
            <ul className='flex flex-wrap justify-center'>
              {
                carrito.map((prod) => (
                  <li key={prod.id} className="flex justify-start bg-neutral-50 m-5 p-5 rounded w-2/6 ">
                    <img src={prod.img} alt={prod.nombre} className='w-32 h-32 object-cover rounded-full' /> 
                    <div className='flex flex-col justify-between items-center ml-10'>
                      <span className='mr-5 text-2xl'> {prod.nombre}   </span>
                      <span className='mr-5'> Precio unitario: <strong> {prod.precio} €</strong>  </span>
                      <span className='mr-5'> {prod.cantidad} u </span>
                      <span className='bg-yellow-100'> <strong> Precio total: {(prod.precio * prod.cantidad).toFixed(2)}   €</strong>  </span> 
                    </div> 
                    <button onClick={() => removeItem(prod)} className="p-5 m-10 bg-red-600 rounded-full" ><RiDeleteBin2Fill  className="text-neutral-50"/></button >   
                  </li>))
              }
            </ul>
            <button onClick={clear} className="my-5 p-5"> borra todo</button>
            <p className='flex w-full justify-end p-5 bg-slate-600'>Precio total <strong className='ml-5'>{finalPrice(carrito)} </strong></p>
           
            
          </> : (
            <>
              <p className="my-5 p-5 text-6xl font-extralight">Actualmente no tiene ningun producto en el carrito</p>

              <Link to="/" className="my-5 px-5 py-2 bg-yellow-200 text-neutral-700 rounded-xl text-xl">
                Volver
              </Link>
            </>

          )
      }

    </div>
  )
}

export default Cart