import Image from 'next/image';
import React from 'react';
import logo from '../../assets/store-1919713_640.png'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/configureStore';

export const Header = () => {
    const { data: session } = useSession()
    const {items} = useSelector((state: RootState) => state?.Cart)
  return (
        <header className="flex px-8 items-center justify-between bg-gray-darkest">
            <div className="grow-0">
                <Link href="/" passHref>
                    <Image src={logo} alt="Commerce Logo" height={98} width={98} className="cursor-pointer"/>
                </Link>
            </div>
            <div className=" hidden sm:flex bg-blue grow align-center rounded h-10 mx-8 hover:bg-opacity-90 cursor-pointer">
                <input type="text" className="grow  p-2 h-full w-full rounded-l focus:outline-none"/>
                <div className="p-2 px-4 h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>
            <div className='flex items-center justify-between space-x-4 whitespace-nowrap text-md'>
                {session ? (
                    <>    
                        <div className="text-white" >
                            Hello, {session.user?.name}
                        </div>
                        <div className="link text-white">
                            <Link href="/orders" passHref>
                                Orders
                            </Link>
                        </div>
                    </>
                ) : (
                    <div className="link text-white" onClick={() => signIn()}>
                        Sign In
                    </div>
                )}
                <div className="link">
                    <Link href="/checkout" passHref>                    
                        <div className="p-4 hover:bg-gray-dark rounded-full duration-150 relative">
                            <span className='absolute top-3 left-12 rounded-lg place-content-center bg-blue text-white text-sm font-bold h-4 w-4 p-2 flex items-center'>
                                {items?.length || '0'}
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="white">
                                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                            </svg>
                        </div>
                    </Link>
                </div>
                {session && 
                    <div className="p-4 hover:bg-gray-dark rounded-full duration-150 relative cursor-pointer" onClick={() => signOut()}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                    </div>
                }            
            </div>
        </header>
    );
};
