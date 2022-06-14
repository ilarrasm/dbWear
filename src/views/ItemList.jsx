import {useParams} from "react-router-dom"
import ItemListContainer from '../components/ItemListContainer'

function ItemList() {

  
  const params = useParams();
  console.log(params.categoria);
  return (
    <>
        <ItemListContainer filtro={!params.categoria ? null : params.categoria}>
        </ItemListContainer>
    </>
  )
}

export default ItemList