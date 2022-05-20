import React, { useEffect, useState } from 'react'
import ItemList from "./ItemList"
import { db } from '../service/firebase';
import {doc, getDoc} from "firebase/firestore"
function ItemListContainer({list}) {
  const [Lista, setLista] = useState([]);
 /*  useEffect(() => {
    const item = doc(db, 'items', "IbnEuHfIsmPZQYkeZd3l")
    getDoc(item).then((snapshot)=>{
      if(snapshot.exists()){
        setLista([{id: snapshot.id, ...snapshot.data()}]);
        console.log(Lista.length);
      }
      })
    }, []) */
    useEffect(()=>{
      let promesa = new Promise((resolve, reject) =>{
        setTimeout(() => {
          resolve(list);
        }, 800); 
      });
    promesa.then((result) =>{
        setLista(result)
    }).catch(err => {
    console.log(err);
    });
    })
    
  

  

  return (
    <>
    <ItemList lista={Lista} />
    </>
  )
}

export default ItemListContainer