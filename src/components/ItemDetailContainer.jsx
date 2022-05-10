import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer() {
    
    const [producto, setProducto] = useState({})
    
    const data = {
        titulo: "Short",
        descripcion: "D&B es más que un emprendimiento, es una familia. Las prendas D & B son tu compañera perfecta en cualquier momento. Con su resistencia, comodidad y elegancia permiten estar en todos esos duros entrenamientos para desplegar tu elegancia en el escenario. Nuestro compromiso con las mujeres y la disciplina para su desarrollo porque el pole dance es autosuperación, libertad y arte.",
        img: "https://personaltrainersmg.files.wordpress.com/2016/03/xd5a2400_1.jpg"
    }
    useEffect(() => {
    
        let promesa = new Promise((resolve, reject) =>{
          setTimeout(() => {
            resolve(data);
          }, 500);
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
