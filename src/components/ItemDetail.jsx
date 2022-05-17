import  React, {useState, useContext} from 'react'
import ItemCount from "./ItemCount"
import { NavLink } from 'react-router-dom'
import { GlobalCartContext } from '../context/CartContext'  
export default function ItemDetail({producto}) {
  const [Cantidad, setCantidad] = useState(0)
  const {addItem, carrito} = useContext(GlobalCartContext)
  function onAdd(c){
    setCantidad(c)
  }
  let obj = {nombre: producto.nombre, cantidad: Cantidad, id: producto.id}
  return (
    <>
            {
                producto ? (
                <>
                <div className='flex fadeIn'>
                  <img className='w-full h-full self-center object-cover ml-5 object-bottom rounded-lg' src={producto.img} alt="" /> 
                  <div className='flex flex-col w-full p-5 text-left'>
                    <h1 className='py-5 text-5xl tracking-wider text-neutral-700 uppercase '>{producto.nombre}</h1> 
                    
                    <p className='text-neutral-600 text-md'>{producto.descripcion}</p>
                    <ItemCount stock={producto.cantidad} init={1} onAdd={onAdd}/> 
                   
                    <NavLink className="flex justify-end" to="/cart">
                    <button className='rounded px-4 py-3 m-5 hover:bg-yellow-300 transition-all ease-in-out duration-150 bg-yellow-400 text-neutral-700 self-end' onClick={() => addItem(obj)} >Comprar</button>  
                    </NavLink>


                  </div>
                </div>
                             
                
                </>
               
                ): (<h1>No found</h1>)
            }
    </>
  )
}
/* <h1>{producto.titulo}</h1>
        <img src={producto.img} alt="" />
        <p>{producto.descripcion}</p> */


/*
object-fit: cover;
object-position: 50% 5%;
margin-left: 1rem;

*/