import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
export default function ItemDetailContainer({prod}) {
    const [producto, setProducto] = useState(prod)
    let produc = prod
    useEffect(() => {
    
        let promesa = new Promise((resolve, reject) =>{
          setTimeout(() => {
            resolve(produc)
            ;
          }, 500);
          });
        promesa.then((result) =>{
            setProducto(result)
        }).catch(err => {
        console.log(err);
        });
      
        return () => {
          
        }
      }, [produc])
  
  
  
    return (
    <>
    
    <ItemDetail producto={producto} />
    </>
  )
}
