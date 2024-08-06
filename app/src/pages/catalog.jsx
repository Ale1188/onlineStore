import './styles/catalog.css';
import Product from './product';
import { useEffect, useState } from 'react';
import dataService from '../services/dataService';

function Catalog(){
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect( function() {
        // const prods = dateService.getProducts();
        // setProducts(prods);
        loadCatalog();
        loadCategories();
        // const cats = dataService.getCategories();
        // setCategories(cats);
    }, []);

    async function loadCatalog(){
        let prods = await dataService.getProducts();
        setProducts(prods);
        console.log(prods);
    }

    async function loadCategories(){
        let cats = await dataService.getCategories();
        setCategories(cats);
    }

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