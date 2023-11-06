import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { totalPrice } from '../../utils'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard'
import './styles.css';

const CheckoutSideMenu  = () => 
{
    const context = useContext(ShoppingCartContext);
    const product = context.productToShow;    
    const cartProducts = context.cartProducts;

    const removeItem = (id) => 
    {
        const filteredProduct = context.cartProducts.filter(product => product.id !== id);
        context.setCartProducts(filteredProduct);
        context.setCount(context.count-1);
    }

    const handleCheckout = () => 
    {
        const orderToAdd = {
            date: '06/11/23',
            products: cartProducts,
            totalProducts: cartProducts.length,
            totalPrice: totalPrice(cartProducts)
        }

        context.setOrder([...context.order, orderToAdd]);
        context.setCartProducts([]);
        context.setCount(0);
    }

    return (
        <aside 
        className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded bg-white`}>
            <div className="flex justify-between items-center p-3">
                <h2 className="font-medium text-xl">My Order</h2>
                <div><XMarkIcon className="h-6 w-6 text-black-500" onClick={ () => context.closeCheckout() } /></div>
            </div>
         <div className="px-6 overflow-y-scroll flex-1">  
         {
              cartProducts.map((cartProduct) => 
              (
                <OrderCard 
                key = {cartProduct?.id}
                id = {cartProduct?.id}
                title={cartProduct?.title} 
                price={cartProduct?.price} 
                imageUrl={cartProduct?.images[0]}
                handleDelete={ removeItem } />  
            ))
        }
        </div>
        <div className="px-6">
            <p className="flex justify-between items-center mb-2">
            <span className="font-light">Total:</span>
            <span className="font-medium text-2xl">${totalPrice(cartProducts)}</span>
            </p>
        <Link to="/my-orders/last">
           <button className="bg-black w-full py-3 mb-3 text-white rounded-lg" onClick={() =>  handleCheckout()}>Checkout</button>
        </Link>
        </div>
        </aside>
    ) 
}

export default CheckoutSideMenu;