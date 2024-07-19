import { useContext } from 'react';
import './styles/navbar.css';

import { Link } from 'react-router-dom';
import DataContext from '../state/dataContext';

function Navbar() {

    const user = useContext(DataContext).user;
    const cart = useContext(DataContext).cart;

    console.log(user.name);

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="title-nav" to="/">Veggie Vibe</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="text-white nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="text-white nav-link active" aria-current="page" to="/catalog">Catalog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="text-white nav-link active" aria-current="page" to="/about">About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="text-white nav-link active" aria-current="page" to="/admin">Admin</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <button className="btn btn-outline-light btn-user">{user.name}</button>
                        <Link className="btn btn-outline-light" to="/cart"> {cart.length} <i className="fa-solid fa-cart-shopping"></i></Link>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;