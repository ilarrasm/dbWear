import React from 'react'

export default function ItemDetail({producto}) {
  return (
    <main className='flex bg-neutral-200'>
            {
                producto ? (
                <>
                <img className='w-full rounded' src={producto.img} alt="" /> 
                <div className='flex flex-col w-full'>
                  <h1 className='p-5 text-5xl tracking-wider text-neutral-700 uppercase'>{producto.titulo}</h1> 
                  <p className='text-neutral-600 text-xl'>{producto.descripcion}</p>
                  <button className='rounded p-4 m-5 hover:bg-yellow-400 transition-all ease-in-out duration-150 bg-yellow-500 text-neutral-700 self-center'>Comprar</button>
                </div>
                
                </>
               
                ): (<h1>No found</h1>)
            }
    </main>
  )
}
/* <h1>{producto.titulo}</h1>
        <img src={producto.img} alt="" />
        <p>{producto.descripcion}</p> */