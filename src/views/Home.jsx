import React from 'react'
import ItemList from "./ItemList"
const Home = () => {
  return (
    <main className='flex flex-col pl-5 bg-neutral-100'>
      <div>

      </div>
      <div className='flex items-center justify-between m-10 p-5'>
        <h1 className='text-8xl font-bold'>Supérate, fortalecete y liberate</h1>
        <div className='flex flex-col text-xl justify-between'>
          <p className='mb-5'>Las prendas <strong className='text-base font-semibold'>D&B</strong>  son tu compañera perfecta en cualquier momento. </p>
          <p className='mb-5'>Con su resistencia, comodidad y elegancia permiten estar en todos esos duros entrenamientos para desplegar tu elegancia en el escenario.</p>
          <p className='mb-5'>Nuestro compromiso con las mujeres y la disciplina para su desarrollo porque el pole dance es autosuperación, libertad y arte.</p> 

        </div>
        
      </div>
      <h2 className='text-4xl'>Nuestros Productos</h2>
      <ItemList></ItemList>
    </main>
  )
}

export default Home


//https://www.packlink.es/default/ajaxpostalcodesrequest?loc=3&load[label]=10115-Berlin&load[value]=1031342677&contain=true&selected=&original=&zip=
//https://www.packlink.es/default/ajaxpostalcodesrequest?loc=65&load[label]=08001-Barcelona&load[value]=pc_es_14621&contain=true&selected=&original=&zip=