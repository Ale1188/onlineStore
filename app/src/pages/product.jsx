import { useState } from 'react';
import QuantityPicker from '../components/quantityPicker';
import './styles/product.css';

function Product(props) {
    const [total, setTotal] = useState(props.info.price.toFixed(2));

    function addProduct() {
        console.log("Adding " + props.info.title);
    }

    function handleQuantityChange(quantity) {
        const newTotal = (quantity * props.info.price).toFixed(2);
        setTotal(newTotal);
    }

    return (
        <div className='product'>
            <img src={'/images/' + props.info.image} alt="" />
            <h5>{props.info.title}</h5>
            <label className='total'>Total ${total}</label>
            <label>Each ${props.info.price.toFixed(2)}</label>
            <div className="controls">
                <QuantityPicker onQuantityChange={handleQuantityChange} />
                <button className='addBtn' onClick={addProduct}>Add</button>
            </div>
        </div>
    );
}

export default Product;
