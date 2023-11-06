import { createContext, useState, useEffect } from 'react'

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => 
{
    // Shopping Cart . Count
    const [count, setCount] = useState(0);
    
    // Product detail . Show Product
    const [isVisibleCard, setIsVisibleCard]  = useState(false);
    const openProductDetail = () => setIsVisibleCard(true);
    const closeProductDetail = () => setIsVisibleCard(false);

    //Product Detail . Show Product
    const defaultProduct = {
        price: 0,
        images: [],
        title:'',
        description: ''
    };
    const [productToShow, setProductToShow] = useState(defaultProduct);

    // Shopping Cart  . Add Products to cart
    const [cartProducts, setCartProducts] = useState([]);

    // Checkout Side Menu . Show side menu
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen]  = useState(false);
    const openCheckout = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckout = () => setIsCheckoutSideMenuOpen(false);

    //Shopping Cart . Order
    const [order, setOrder] = useState([]);

    //Get Products
    const [items, setItems] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);

    //Get search by title
    const [searchByTitle, setSearchByTitle] = useState(null);

    

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then (response => response.json())
        .then(data => setItems(data))
       }, [])

    const filtereditemsByTitle = (items, searchByTitle) =>
    {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
    } 


    useEffect(() => {
        if(searchByTitle)  setFilteredItems(filtereditemsByTitle(items, searchByTitle));
       
       }, [items, searchByTitle])

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isVisibleCard,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckout,
            closeCheckout,
            order,
            setOrder,
            items,
            setItems, 
            filteredItems,
            searchByTitle,
            setSearchByTitle
        }}>
            {children}
        </ShoppingCartContext.Provider>
    ) 
}