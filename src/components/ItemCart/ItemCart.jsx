
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext';


const ItemCart = ({id, name, price, quantity}) => {

    const navigate = useNavigate()

    const { removeItem } = useCart()

    const handleRemoveItem = (e) => {
        e.stopPropagation()
        removeItem(id)
    }

    

    return (
        <div onClick={() => navigate (`/detail/${id}`)} >
        
            <div>
            <table className='table'>
            <tbody>
                    <tr>
                        <td style={{width:'300px'}}>{name}</td>
                        <td style={{width:'300px'}}>{price}</td>
                        <td style={{width:'300px'}}>{quantity}</td>
                        <td style={{width:'300px'}}>$ {price * quantity}</td>
                        <td style={{width:'300px'}}><button onClick={handleRemoveItem}>X</button></td>
                    </tr>
            </tbody>
            </table>
                
            </div>
        </div>
    )
}

export default ItemCart
