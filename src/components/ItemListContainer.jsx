import React, { useEffect, useState } from 'react'
import ItemList from "./ItemList"
import { db } from '../service/firebase';
import { collection, getDocs } from "firebase/firestore"
function ItemListContainer({ list }) {
  const [Lista, setLista] = useState([]);
  useEffect(() => {
    const itemsCollection = collection(db, 'items')
    getDocs(itemsCollection).then((snapshot) => {
      if (snapshot) {
        setLista(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      }
    })
  }, [])

  return (
    <>
      <ItemList lista={Lista} />
    </>
  )
}

export default ItemListContainer