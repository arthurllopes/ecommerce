import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../../components/Header';
import { Product } from '../../fragments/ProductCard';
import { removeFromCart } from '../../store/Cart';
import { RootState } from '../../store/configureStore';

const Checkout = () => {
    const {items, total} = useSelector((state: RootState) => state.Cart)
    const dispatch = useDispatch()
    const { data: session } = useSession()
  return (
        <div className="bg-gray-lightest">
            <Header />
            <div className='border-solid border-b p-4 pl-4 shadow-md'>
                <h2>Shopping Cart</h2>
            </div>
            <main className='flex flex-col md:flex-row'>
                <div className='flex flex-col grow'>
                    <div className='p-4'>
                        {items.length > 0 ? (
                            items.map((item: Product) => (
                                <div key={item.id} className='grid grid-cols-1 sm:grid-cols-5 p-2 items-center bg-gray my-2 rounded-md'>
                                    <div className='p-4 bg-white col-span-1 sm:col-span-2 flex justify-center rounded-md'>
                                        <Image src={item.image} alt={item.title} width={200} height={200} objectFit='contain'/>
                                    </div>
                                    <div className='flex flex-col space-y-3 col-span-4 sm:col-span-3 mx-2 p-4'>
                                        <p className='font-bold'>{item.title}</p>
                                        <p>{item.description}</p>
                                        <div className='flex justify-between items-center'>
                                                <div className='flex space-x-2 items-center'>
                                                    <div className='flex space-x-2 items-center'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="yellow">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        {item.rating.rate}
                                                    </div>
                                                    <div>
                                                        $ {item.price}
                                                    </div>
                                                </div>
                                                <div  className=''>
                                                    <button className=' bg-blue-light mx-auto py-2 px-2 md:px-8 rounded hover:opacity-90 border font-semibold' onClick={() => dispatch(removeFromCart(item.id))} >
                                                        Remove from Cart
                                                    </button>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            "You do not have any items on your Cart"
                        )}
                    </div>
                </div>
                {items.length > 0 && 
                <div className='flex flex-col bg-white p-10 shadow-md'>
                    <h3>SubTotal: ({items.length} items): 
                        <span>
                            $ {total.toFixed(2)}
                        </span>
                    </h3>
                    <button disabled={session ? true : false} className={`cursor-pointer mt-5 p-4 px-8 whitespace-nowrap rounded-md ${session ? 'bg-blue-light' : 'bg-gray-light'}`}>
                        {session ? 'Proceed to checkout' : 'Sign in to checkout'}
                    </button>
                </div>}
            </main>
        </div>
    );
};

export default Checkout;
