import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../Components/Layout';
import Card from '../../Components/Card';
import ProductDetail from '../../Components/ProductDetail';
import { ShoppingCartContext } from '../../Context'


function Home()
{
  const context = useContext(ShoppingCartContext);
     const params = useParams();
     
  useEffect(() => { 
    
    context.setSearchByCategory(params?.category);
    
  })
  


  const productListItem = context?.searchByTitle || context?.searchByCategory ? context.filteredItems : context.items;

  return (
    <>
      <Layout>
         <div className="flex items-center justify-center relative w-80 mb-4">
          <h1 className="font-medium text-xl">Products</h1>
         </div>
         <input 
         type="text" 
         placeholder="Search a Product" 
         className="w-80 rounded-lg border border-black p-4 mb-4 focus:outline-none"
         onChange={(event) => context.setSearchByTitle(event.target.value) }
         />
         <div className="grid  gap-4 grid-cols-4 w-full max-w-screen-lg">

         {
          productListItem?.map((item) => 
          (
             <Card key={item.id} data ={item} /> 
          ))
         }
         
         </div>
         <ProductDetail/>
      </Layout>
      
    </>
  )
}

export default Home
