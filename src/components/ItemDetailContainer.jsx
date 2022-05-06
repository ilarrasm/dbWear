import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer() {
    
    const [producto, setProducto] = useState({})
    
    const data = {
        titulo: "Short",
        descripcion: "El mejor short que podes encontrar",
        img: "https://personaltrainersmg.files.wordpress.com/2016/03/xd5a2400_1.jpg"
    }
    useEffect(() => {
    
        let promesa = new Promise((resolve, reject) =>{
          setTimeout(() => {
            resolve(data);
          }, 2000);
          });
        promesa.then((result) =>{
            setProducto(result)
        }).catch(err => {
        console.log(err);
        });
      
        return () => {
          
        }
      }, [])
  
  
  
    return (
    <>
    <ItemDetail producto={producto} />
    </>
  )
}
