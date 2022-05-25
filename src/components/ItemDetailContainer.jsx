import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { db } from '../service/firebase';
import { getDoc, doc } from 'firebase/firestore';




export default function ItemDetailContainer({ prod }) {
  const [producto, setProducto] = useState(prod)
  useEffect(() => {
    const producte = doc(db, "items", prod);
    getDoc(producte).then((snapshot) => {
      if (snapshot.exists()) {

        setProducto({ id: snapshot.id, ...snapshot.data() })
      }
    })

    return () => { }
  }, [])
  return (
    <>

      <ItemDetail producto={producto} />
    </>
  )
}
