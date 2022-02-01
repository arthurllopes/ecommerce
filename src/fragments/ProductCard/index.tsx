import React from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/Cart';
import { useRouter } from 'next/router'

export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }
}
type Props = {
    product: Product;
}
const ProductCard = ({product}: Props) => {
    const router = useRouter()
    const navigateTo = () => {
        router.push(`/${product.id}`)
    }
    const dispatch = useDispatch();
  return (
        <div className='bg-white z-40 px-8 py-8 flex flex-col m-5 rounded h-80 cursor-pointer'>
            <Image src={product.image} alt={product.title} height={180} width={120} objectFit='contain' />
            <h4 className='p-2 italic' onClick={navigateTo}>{product.title}</h4>
            <div className="flex items-center justify-between px-3 mb-2" onClick={navigateTo}>
                <div className="flex items-center">
                    {product.rating.rate}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="yellow">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                </div>
                <div>
                    ${product.price}
                </div>
            </div>
            <div className='z-50 mx-auto grow mt-2' >
                <button className=' bg-yellow mx-auto py-2 px-8 whitespace-nowrap rounded hover:opacity-90 border font-semibold' onClick={() => dispatch(addToCart(product))} >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
