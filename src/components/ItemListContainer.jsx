import React, {useState, useEffect} from 'react'
import ItemList from "./ItemList"
import { db } from '../service/firebase';
import { collection, getDocs } from "firebase/firestore"
function ItemListContainer({ filtro, limit }) {
  console.log(filtro);
  const [Lista, setLista] = useState([]);
  useEffect(() => {
    const itemsCollection = collection(db, 'items')
    getDocs(itemsCollection).then((snapshot) => {
      if (snapshot && !filtro) {
          let list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          setLista(list);
        }else if(snapshot && filtro){
          let filt = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          let filtrardo = filt.filter((prod) => prod.categoria === filtro )
          setLista(filtrardo);
        }
    }
    
    )  
  }
  , [filtro])

  return (
    <>
      <ItemList lista={Lista} limit={limit} />
    </>
  )
}

export default ItemListContainer