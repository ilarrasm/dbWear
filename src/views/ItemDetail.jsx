import React from 'react'
import ItemDetailContainer from '../components/ItemDetailContainer'
import { useParams } from 'react-router-dom'

import ItemListContainer from '../components/ItemListContainer';
const ItemDetail = () => {
  const {id} = useParams();
 
  
  // const {productos} = db
  // let product = productos[id];
  return (
    <main className='flex flex-col '> 
      <ItemDetailContainer prod={id}></ItemDetailContainer>
      
    </main>
  )
}

export default ItemDetail

//<ItemListContainer list={}></ItemListContainer>