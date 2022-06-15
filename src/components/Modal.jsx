import React from 'react'
import {RiCloseCircleLine,RiCheckboxCircleLine} from "react-icons/ri"
export default function Modal({ val, err, suc }) {
    const style = {
        success: {
            alert: "text-7xl text-green-600",
            icon: "text-5xl m-5 text-green-600 bg-green-200 rounded-full",
        },
        error: {
            alert: "text-7xl text-red-600",
            icon: "text-5xl m-5 text-red-600 bg-red-200 rounded-full",

        }

    }
    return (
        <div className=' flex fixed top-0 left-0 w-full h-screen bg-black/70 text-white overflow-y-hidden justify-center '>
            <div className='flex flex-col self-center justify-center justify-self-center items-center w-1/2 h-1/2 bg-neutral-100 rounded text-neutral-600 shadow-slate-50'>
                <span className={val ? style.error.alert : style.success.alert }>{val ? "Error" : "Compra realizada con exito"}</span>
                {
                    val ? <RiCloseCircleLine className={style.error.icon}></RiCloseCircleLine>: <RiCheckboxCircleLine className={style.success.icon}></RiCheckboxCircleLine>}
                <p className='p-5 text-xl'>{val ? "Lo sentimos, algo falló, revise el formulario" : "Recibirá un correo con toda la información de su compra!"}</p>
                <button className="p-2 border border-neutral-500 rounded hover:bg-neutral-500 hover:text-neutral-200" onClick={val ? err : suc}> Cerrar </button>
            </div>
        </div>
    )
}
