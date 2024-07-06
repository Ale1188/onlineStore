
import {useState} from 'react';
import './styles/quantityPicker.css';

function QuantityPicker(){
    const [quantity, setQuantity] = useState(1);

    function decrease(){
        let val = quantity - 1;
        if(val > 0){
            setQuantity(val);
        }
    }
    
    function increase(){
        let val = quantity + 1;
        setQuantity(val);
    }

    return(
        <div className="qt-picker">
            <button className='lessBtn' disabled={quantity === 1} onClick={decrease}>-</button>
            <label>{quantity}</label>
            <button className='moreBtn' onClick={increase}>+</button>
        </div>
    );
}

export default QuantityPicker