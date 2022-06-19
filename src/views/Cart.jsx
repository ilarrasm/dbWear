import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { GlobalCartContext } from '../context/CartContext'
import { RiDeleteBin2Fill } from 'react-icons/ri'
import { Form } from '../components/Form';
function Cart() {
  const { carrito, clear, removeItem, finalPrice, imgF } = useContext(GlobalCartContext)

  return (
    <div className='flex flex-col  text-neutral-700 bg-neutral-200'>
      {
        carrito.length > 0 && carrito !== undefined ?
          <main className='flex flex-col sm:mx-10 my-10 sm:px-20 overflow-hidden'>
            
            <section className='flex flex-col bg-neutral-50 rounded sm:px-20 sm:p-10 w-full h-full'>
              
              <ul className='grid grid-cols-3 gap-1 my-5'>
                {
                  carrito.map((prod) => (
                    <li key={prod.id} className="flex  justify-between items-center bg-neutral-50 rounded  h-full w-content col-span-3">
                      <img src={imgF(prod.img)} alt={prod.nombre} className='w-32 h-32 object-cover rounded-full' />
                      <div className='flex flex-col justify-between items-center sm:ml-10 '>
                        <span className='mr-5 text-2xl'> {prod.nombre}   </span>
                        <span className='mr-5'> Precio unitario: <strong> {prod.precio} €</strong>  </span>
                        <span className='mr-5'> {prod.cantidad} u </span>
                        <span className='bg-yellow-100'> <strong> Precio total: {(prod.precio * prod.cantidad).toFixed(2)}   €</strong>  </span>
                      </div>
                      <button onClick={() => removeItem(prod)} className="p-5 self-center m-10 bg-red-600 rounded-full" ><RiDeleteBin2Fill className="text-neutral-50" /></button >
                    </li>))
                }
              </ul>

              <p className='flex w-full justify-end p-5'>Precio total <strong className='ml-5'>{finalPrice(carrito)} </strong></p>
              <div className='flex flex-col sm:flex-row justify-between sm:mx-6 sm:text-xl'>
                <button onClick={clear} className="my-5 p-5 border border-red-600 hover:bg-red-600 self-center rounded text-red-600 hover:text-neutral-50"> Borrar todo </button>
                <Link to="/" className='text-center my-5 p-5 bg-neutral-500 hover:bg-yellow-300  rounded text-neutral-100 hover:text-neutral-600'> Seguir comprando </Link>
                
              </div>

            </section>
            <Form></Form>

            
          </main> : (
            <main className='flex flex-col overflow-hidden self-center'>

                <h2 className="my-5 p-5 text-3xl sm:text-6xl font-extralight self-center ">Actualmente no tiene ningun producto en el carrito</h2>

                <Link to="/" className="flex my-5 px-5 py-2 bg-yellow-200 text-neutral-700 rounded-xl text-xl align-center text-center self-center">
                  Volver
                </Link>

            </main>

          )
      }

    </div>
  )
}

export default Cart

// Utiliza las operaciones de inserción para insertar tu orden en la colección y dale al user su id de orden auto-generada
// Crea los mappings para poder grabar un objeto del formato
// { buyer: { name, phone, email }, items: [{ id, title, price }], date, total  }
