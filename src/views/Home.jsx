import React from 'react'
import ItemListContainer from '../components/ItemListContainer'
const Home = () => {
  return (
    <main>
      <div className='flex items-center justify-between m-5 p-5'>
      <h1 className='text-5xl'>Supérate, fortalecete y liberate</h1>
      <p className='text-md w-1/2'>
        Las prendas D & B son tu compañera perfecta en cualquier momento. 
        Con su resistencia, comodidad y elegancia permiten estar en todos esos duros entrenamientos para desplegar tu elegancia en el escenario.
        Nuestro compromiso con las mujeres y la disciplina para su desarrollo porque el pole dance es autosuperación, libertad y arte.
      </p>
      </div>
      <h2 className='text-4xl'>Nuestros Productos</h2>
      <ItemListContainer></ItemListContainer>
    </main>
  )
}

export default Home