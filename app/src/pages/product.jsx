import {useContext, useState} from 'react';
import QuantityPicker from '../components/quantityPicker';
import './styles/product.css';
import DataContext from '../state/dataContext';

function Product(props){
    const [quantity, setQuantity] = useState(1);
    
    let addProductToCart = useContext(DataContext).addProductToCart;

    function addProduct(){
        let x = {
            ...props.info,
            quantity: quantity,

        };
        addProductToCart(x);
    }

    function handleQuantityChange(val){
        setQuantity(val);
    }

    function getTotal(){
        let total = props.info.price * quantity;
        return total.toFixed(2);
    }

    return(
        <div className='product'>

            <img src={'/images/' + props.info.image} alt="" />

            <h5>{props.info.title}</h5>

            <label className='total'>Total ${getTotal()}</label>
            <label>Each ${props.info.price.toFixed(2)}</label>

            <div className="controls">
            <QuantityPicker onChange={handleQuantityChange}/>
            <button className='addBtn' onClick={addProduct}><i class="fa-solid fa-cart-plus"></i></button>
            </div>
            
        </div>
    );
}

export default Product;