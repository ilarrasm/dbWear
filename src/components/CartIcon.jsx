import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { RiShoppingCartLine } from "react-icons/ri";
import { GlobalCartContext } from '../context/CartContext'  
function CartIcon() {

  const {carrito} = useContext(GlobalCartContext)
  return (
    <Link to="/cart">
      <button className='flex items-center px-5 py-2 bg-neutral-600 text-neutral-50 rounded-xl'>
        <RiShoppingCartLine className='' /> <span>{carrito.length}</span>
      </button>
    </Link>
    
  )
}

export default CartIcon