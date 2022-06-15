import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { RiShoppingCartLine } from "react-icons/ri";
import { GlobalCartContext } from '../context/CartContext'  
function CartIcon() {

  const {carrito} = useContext(GlobalCartContext)
  return (
    <Link to="/cart">
      <button className='flex items-center justify-between font-semibold px-5 py-2 w-full hover:bg-neutral-600 bg-neutral-800 text-neutral-300 hover:text-neutral-200 rounded-xl'>
        <RiShoppingCartLine className='' /> <span className='ml-2'>{carrito.length}</span>
      </button>
    </Link>
    
  )
}

export default CartIcon