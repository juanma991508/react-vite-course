import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context'
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'

const Card = (data) => 
{
    const context = useContext(ShoppingCartContext);

    const showProduct = (productDetail) => {
        context.openProductDetail();
        context.setProductToShow(productDetail);
    }

    const addProduct = (event, productDetail) => 
    {
        event.stopPropagation();
        let newProducts = context.cartProducts;
        if(!newProducts.includes(productDetail))
        {
            context.setCount(context.count+1);
            context.setCartProducts([...newProducts, productDetail]);
            context.openCheckout();
            context.closeProductDetail();
        }
    }
    const renderIcon = (id) => 
    {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0;
        if(isInCart)
        {
            return (
                <CheckIcon 
                className="w-6 h-6 text-black"
                />
                ) 
        }
        else
         {
            return (
                <PlusIcon 
                className="w-6 h-6 text-black"
                onClick={(event) => addProduct(event, data.data)}
                />  
            )

        }


    }


    return (
        <div 
        className="bg-white cursor-pointer w-56 h-60 rounded-lg" 
        onClick = {() => showProduct(data.data)}
        >
             <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{ data.data?.category?.name ?? 'Electronics'}</span>
                <img className="w-full h-full object-cover rounded-lg" src={ data.data?.images[0]} alt={data.data?.title} />
                
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1" >
                {
                    renderIcon(data.data?.id)
                }

                </div>
                
                    
                
             </figure>
             <p className="flex justify-between">
                <span className="tex-sm font-light">{data.data?.title}</span>
                <span className="tex-sm font-medium">${data.data?.price}</span>
             </p>
        </div>
    )
}  

export default Card