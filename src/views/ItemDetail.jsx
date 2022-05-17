import React from 'react'
import ItemDetailContainer from '../components/ItemDetailContainer'
import { useParams } from 'react-router-dom'
import Database from '../DB/Database';
import ItemListContainer from '../components/ItemListContainer';
const ItemDetail = () => {
  const {productos} = Database
  const {id} = useParams();
  let product = productos[id];
  return (
    <main className='flex flex-col '> 
      <ItemDetailContainer prod={product}></ItemDetailContainer>
      <ItemListContainer list={productos}></ItemListContainer>
    </main>
  )
}

export default ItemDetail