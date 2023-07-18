import React from 'react'
import { NavLink } from 'react-router-dom'
import { VscAccount } from "react-icons/vsc";


function Navbar() {
    return (
        <header>
            <nav className="bg-white border-gray-200">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <NavLink to="/" className="flex items-center">
                        <img src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/logo-new.png" className="h-8 mr-3" alt="Logo" />
                    </NavLink>
                    <div className="relative hidden md:block">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search icon</span>
                        </div>
                        <input type="text" id="search-navbar"
                            className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                            placeholder="Search..." />
                    </div>
                    <div className="flex items-center">
                        <NavLink className="mr-6 text-sm text-gray-500 hover:underline flex items-center">
                            <VscAccount color='red' className='inline mr-4 h-[25px] w-[25px]' />
                            <span className="self-center text-xl text-black font-semibold">My Account</span>
                        </NavLink>
                        <NavLink to="/" className="flex items-center">
                            <img src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/cart_white.svg" className="h-8 mr-3" alt="Logo" />
                        </NavLink>
                    </div>
                </div>
            </nav>
            <nav className="bg-gray-200 flex justify-between border border-b-black">
                <div className="max-w-screen-xl px-4 py-3">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                            <li>
                                <NavLink to="#!" className="text-gray-900 hover:underline" aria-current="page">Book</NavLink>
                            </li>
                            <li>
                                <NavLink to="#!" className="text-gray-900 hover:underline">New Arrivals</NavLink>
                            </li>
                            <li>
                                <NavLink to="#!" className="text-gray-900 hover:underline">Box Sets</NavLink>
                            </li>
                            <li>
                                <NavLink to="#!" className="text-gray-900 hover:underline">Best Sellers</NavLink>
                            </li>
                            <li>
                                <NavLink to="#!" className="text-gray-900 hover:underline">Fiction Books</NavLink>
                            </li>
                            <li>
                                <NavLink to="#!" className="text-gray-900 hover:underline">Awards Winners</NavLink>
                            </li>
                            <li>
                                <NavLink to="#!" className="text-gray-900 hover:underline">Featured Authors</NavLink>
                            </li>
                            <li>
                                <NavLink to="#!" className="text-gray-900 hover:underline">Today's Deal</NavLink>
                            </li>
                            <li>
                                <NavLink to="#!" className="text-gray-900 hover:underline">Request a Book</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center">
                    <NavLink to="/" className="flex items-center">
                        <img src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/wishlist_white.svg" className="h-8 mr-3" alt="Logo" />
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
