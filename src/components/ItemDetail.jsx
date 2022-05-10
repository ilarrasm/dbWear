import React from 'react'
import ItemListContainer from "./ItemListContainer"

export default function ItemDetail({producto}) {
 

  

  return (
    <main className='flex flex-col bg-neutral-200'>
            {
                producto ? (
                <>
                <div className='flex fadeIn'>
                  <img className='w-full h-80 self-center object-cover ml-5 object-bottom rounded-lg' src={producto.img} alt="" /> 
                  <div className='flex flex-col w-full p-5 text-left'>
                    <h1 className='py-5 text-5xl tracking-wider text-neutral-700 uppercase '>{producto.titulo}</h1> 

                    <p className='text-neutral-600 text-md'>{producto.descripcion}</p>

                    <button className='rounded px-4 py-3 m-5 hover:bg-yellow-300 transition-all ease-in-out duration-150 bg-yellow-400 text-neutral-700 self-end'>Comprar</button>

                  </div>
                </div>
                
                <ItemListContainer></ItemListContainer>
                
                </>
               
                ): (<h1>No found</h1>)
            }
    </main>
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