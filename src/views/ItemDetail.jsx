import React from 'react'
import ItemDetailContainer from '../components/ItemDetailContainer'
import { useParams } from 'react-router-dom'
import Database from '../DB/Database';
const ItemDetail = () => {
  const {productos} = Database
  const {id} = useParams();
  let product = productos[id];
  console.log(product);
  return (
    <main className='flex flex-col '> 
      <ItemDetailContainer prod={product}></ItemDetailContainer>
    </main>
  )
}

export default ItemDetail