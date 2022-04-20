import React from 'react'

function Dropdown ({text, items} ) {
  const clickear = (e)=>{
    e.preventDefault()
    document.querySelector(".dropDown").classList.toggle("hidden")
  }
  const listItems = items.map((item) =>  <li className="p-2 rounded-lg hover:bg-slate-600"><a href="#">{item}</a></li>);
  return (
    <>
        <button onClick={clickear} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none  rounded-lg text-sm p-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 relative" type="button"> {text || "a"}  </button>
        <div className='hidden z-10 w-44 bg-white rounded-lg divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 dropDown absolute top-35 mt-5 right-5 p-5'>
            <ul className="p-1 text-sm text-gray-700 dark:text-gray-200">
              {listItems}
            </ul>
        </div>
    </>
  )
}

export default Dropdown