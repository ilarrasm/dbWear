import {BrowserRouter, Routes, Route}  from "react-router-dom"
import Card from "../views/Card"
import Home from "../views/Home"
import ItemDetail from "../views/ItemDetail"
import ItemList from "../views/ItemList"
import Base from "../components/Base"
function Rutas() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Base/>}>
              <Route index element={<Home/>}/>
              <Route path="/card" element={<Card/>}/>
              <Route path="/itemList" element={<ItemList />}></Route>
              <Route path="/itemList/category" element={<ItemList />}></Route>
              <Route path="/itemDetail/:id" element={<ItemDetail />}></Route>
              
            </Route>
            
        </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default Rutas