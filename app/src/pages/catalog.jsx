import './styles/catalog.css';
import Product from './product';
import { useEffect, useState } from 'react';
import dateService from '../services/dateService';

function Catalog(){
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect( function() {
        console.log("Catalog loaded!");

        const prods = dateService.getProducts();
        setProducts(prods);

        const cats = dateService.getCategories();
        setCategories(cats);
    }, []);

    return(
        <div className='catalog page'>
            <h1>Check our Amazing catalog!</h1>

            <div className='filters'>
                {categories.map(cat => <button className='btn btn-sm btn-success'>{cat}</button>)}
            </div>

            {products.map(prod  => <Product info={prod}/>)}

        </div>
    );
}

export default Catalog;