import QuantityPicker from '../components/quantityPicker';
import './styles/product.css';

function Product(props){

    function addProduct(){
        console.log("Adding" + props.info.title)
    }

    return(
        <div className='product'>

            <img src={'/images/' + props.info.image} alt="" />

            <h5>{props.info.title}</h5>

            <label className='total'>Total ${props.info.price.toFixed(2)}</label>
            
            <label>Each ${props.info.price.toFixed(2)}</label>

            <div className="controls">
            <QuantityPicker/>
            <button className='addBtn' onClick={addProduct}>Add</button>
            </div>
            
        </div>
    );
}

export default Product;