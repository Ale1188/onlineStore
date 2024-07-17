import { useState } from 'react'
import './styles/admin.css';

function Admin() {
    const [product, setProduct] = useState({
        title: '',
        image: '',
        price: '',
        category: ''
    });
    const [coupon, setCoupon] = useState({
        code: '',
        discount: '',
    });

    function handleProduct(e){
        const text = e.target.value;
        const name = e.target.name;

        coupon[name] = text;

        //create a copy
        let copy = {...product}
        //modify the copy
        copy[name] = text;
        //set the copy back
        setProduct(copy);

        // JS spread operator
    }

    function handleCoupon(e){
        const text = e.target.value;
        const name = e.target.name;

        // coupon[name] = text;

        //create a copy
        let copy = {...coupon}
        //modify the copy
        copy[name] = text;
        //set the copy back
        setCoupon(copy);

        // JS spread operator
    }

    function saveProduct(){
        console.log(product);
    }

    function saveCoupon(){
        console.log(coupon);
    }

    return (
        <div className="admin page">
            <h1>Store Administration</h1>
            <div className='container'>

                <section className='sec-prods'>
                    <h3>Product</h3>
                    <div className="form">
                        <div>
                            <label htmlFor="" className="form-label">Title</label>
                            <input onBlur={handleProduct} name="title" type="text" className="form-control text-center" />
                        </div>
                        <div>
                            <label htmlFor="" className="form-label">Image</label>
                            <input onBlur={handleProduct} name="image" type="text" className="form-control text-center" />
                        </div>
                        <div>
                            <label htmlFor="" className="form-label">Price</label>
                            <input onBlur={handleProduct} name="price" type="number" className="form-control text-center" />
                        </div>
                        <div>
                            <label htmlFor="" className="form-label">Category</label>
                            <select onBlur={handleProduct} name="category" id="" className='form-control text-center'>
                                <option value="" selected disabled>Select a option</option>
                                <option value="fruit">Fruit</option>
                                <option value="Vegetable">Vegetable</option>
                            </select>
                        </div>
                        <button onClick={saveProduct} className="btn btn-sm btn-dark mt-3"><i class="fa-solid fa-tag"></i> Save Product</button>
                    </div>
                </section>

                <section className='sec-coupons'>
                    <h3>Coupons</h3>
                    <div className="form">
                        <div>
                            <label htmlFor="" className="form-label">Code</label>
                            <input onBlur={handleCoupon} name="code" type="text" className="form-control" />
                        </div>
                        <div>
                            <label htmlFor="" className="form-label">Discount</label>
                            <input onBlur={handleCoupon} name="discount" type="number" className="form-control" />
                        </div>
                        <button onClick={saveCoupon} className="btn btn-sm btn-dark mt-3"><i class="fa-solid fa-ticket"></i> Save Coupon</button>
                    </div>
                </section>

            </div>
        </div>
    );
}

export default Admin;