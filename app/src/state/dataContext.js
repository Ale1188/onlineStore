import { createContext } from "react";

const DataContext = createContext({
    cart: [],
    user: [],
    addProductToCart: () => {},
    resetCart: () => {},
});

export default DataContext;