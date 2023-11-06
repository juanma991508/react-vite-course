import { useContext } from 'react';
import './styles.css';
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

const ProductDetail  = () => 
{
    const context = useContext(ShoppingCartContext);
    const product = context.productToShow;    

    return (
        <aside 
        className={`${context.isVisibleCard ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded bg-white`}>
            <div className="flex justify-between items-center p-3">
                <h2 className="font-medium text-xl">Detail</h2>
                <div><XMarkIcon className="h-6 w-6 text-black-500" onClick={ () => context.closeProductDetail() } /></div>
            </div>
            <figure className="px-6">
                <img 
                className="w-full h-full rounded-lg"
                src={product?.images[0]} alt={product?.title} />
            </figure>
            <p className="flex flex-col p-6">
                <span className="font-medium text-2xl py-2">${product?.price}</span>
                <span className="font-medium text-md">{product?.title}</span>
                <span className="font-light text-xs">{product?.description}</span>
            </p>
        </aside>
    ) 
}

export default ProductDetail;