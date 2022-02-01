import { GetServerSideProps } from 'next';
import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Header } from '../../components/Header';
import ProductCard, { Product } from '../../fragments/ProductCard';
import { addToCart } from '../../store/Cart';

type Props = {product: Product}
const ProductPage = ({product}: Props) => {
    const [relatedProducts, setRelatedProducts] = React.useState<Product[] | null>()
    const dispatch = useDispatch()
    React.useEffect(() => {
        const getRelated = async () => {
            const sameCategory = await fetch(`https://fakestoreapi.com/products/category/${product.category}?limit=5`)
            .then(response => response.json())
            const related = sameCategory.filter((item: Product) => item.id !== product.id)
            setRelatedProducts(related)
        }
        getRelated()
    }, [product])
  return (
      <>
        <Header />
        <div className='flex flex-col bg-gray-light'>
            <div className='grid grid-cols-5 p-10'>
                <div className='col-span-2 bg-white flex justify-center p-4 rounded-md'>
                    <Image src={product.image} alt={product.title} width={300} height={300} objectFit='contain'/>
                </div>
                <div className='flex flex-col space-y-3 col-span-3 mx-2 p-4'> 
                    <p className='font-bold'>{product.title}</p>
                    <p>{product.description}</p>
                        <div className='flex justify-between items-center'>
                                <div className='flex space-x-2 items-center'>
                                    <div className='flex space-x-2 items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="yellow">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        {product.rating.rate}
                                    </div>
                                    <div>
                                        $ {product.price}
                                    </div>
                                </div>
                        </div>
                        <div className='grow mt-2' >
                            <button className=' bg-yellow mx-auto py-2 px-8 whitespace-nowrap rounded hover:opacity-90 border font-semibold' onClick={() => dispatch(addToCart(product))} >
                                Add to Cart
                            </button>
                        </div>
                </div>
            </div>
            <div className='p-10'>
                <h2 className='font-bold text-2xl '>Related Items</h2>
                <div className='mx-auto  grid grid-flow-row-dense sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {relatedProducts?.map((relatedProduct: Product) => (
                        <ProductCard key={relatedProduct.id} product={relatedProduct} />
                    ))}
                </div>
            </div>
        </div>
      </>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const product = await fetch(`https://fakestoreapi.com/products/${context.query.id}`)
    .then(response => response.json())
    console.log(product)
    return {
      props: {
        product
      }
    }
  }

export default ProductPage;
