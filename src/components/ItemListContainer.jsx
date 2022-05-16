import React, { useEffect, useState } from 'react'
import ItemList from "./ItemList"

function ItemListContainer({list}) {
  console.log(list);
  const [Lista, setLista] = useState([]);
  useEffect(() => {
    
    let promesa = new Promise((resolve, reject) =>{
        setTimeout(() => {
          resolve(list);
        }, 800); 
      });
    promesa.then((result) =>{
        setLista(result)
        console.log(result);
    }).catch(err => {
    console.log(err);
    });
  
    return () => {
      
    }
  }, [Lista])
  

  

  return (
    <>
    <ItemList lista={Lista} />
    </>
  )
}

export default ItemListContainer