import { collection, getDocs, getDoc, doc, addDoc, updateDoc } from "firebase/firestore";
import { db } from "../service/firebase";
import { useState } from "react";
const useFirebase = () => {
    const fetchGetDataCollection = async () => {
        try {
            const data = collection(db, "items");
            const col = await getDocs(data);
            const response = col.docs.map(doc => doc = { id: doc.id, ...doc.data() })

        } catch (error) {
            console.log(error);
        }
    }
    const fetchUpdateDoc = () => {
        // actualizar
    }
    const fetchGenerateTicket = async ({ datos }) => {
        //generar ticket
        try {
            const col = collection(db, "compras");
            const order = await addDoc(col, datos);
            console.log(order.id);
        } catch (error) {
            console.log(error);
        }

    }
    return {
        fetchGenerateTicket,
        fetchUpdateDoc,
        fetchGetDataCollection
    }
}
export default useFirebase