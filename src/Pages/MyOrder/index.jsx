import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../Components/Layout';
import OrderCard from '../../Components/OrderCard'

function MyOrder() 
{
  const context = useContext(ShoppingCartContext);
  const params = useParams();
  const indexOrderPath = Number(params.id);

    return (
        <>
          <Layout>
          
          <div className="flex items-center justify-center relative w-80 mb-6">
              <Link to="/my-orders" className="absolute left-0 ">
              <ChevronLeftIcon className="h-6 w-6"/>
              </Link>
              <h1 className="font-medium text-xl">My Order</h1>
            </div>
            <div className='flex flex-col w-80'>
            {!isNaN(indexOrderPath) ? 
          ( context.order?.[indexOrderPath]?.products.map((product) => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images[0]} 
              price={product.price}
            />
          ))) : (context.order?.slice(-1)[0]?.products.map((product) => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images[0]} 
              price={product.price}
            />
          )))
        }
      </div>
          </Layout>
          
        </>
      )
}

export default MyOrder;