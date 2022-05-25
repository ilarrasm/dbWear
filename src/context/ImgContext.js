import React,{useState, createContext} from 'react'
export const ImgContextGlobal = createContext("");
const ImgContext = ({children}) => {
    function img(image){
          // mostrar imagenes
        const imagenes = require.context("../media", true);
        let img
        if(image !== undefined && image){
          img = imagenes(`./${image}`)
        }
    }
    return (
        <ImgContextGlobal.Provider value={{img}} >
            {children}
        </ImgContextGlobal.Provider>
    )
}
export default ImgContext

/// en desuso