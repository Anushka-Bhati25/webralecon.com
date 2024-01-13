"use client";
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import Logo from '../assets/header_logo.png'
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

const Navbar = () => {
    const currentPath = usePathname();
    const Links = [
        { id: 1, path: '/', text: 'Home' },
        { id: 2, path: '/#about', text: 'About' },
        { id: 3, path: '/#services', text: 'Services' },
        { id: 4, path: '/#customers', text: 'Customer Testimonial' },
        { id: 5, path: '/#contact-form', text: 'Contact' }
    ]

    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(false);
    const handleVisibility = () => {
        setVisible(true);
    };
    const toggleNavbar = () => {
        setOpen(!open);
    };
    return (


        <nav className="bg-white mb-10 w-full fixed z-20 top-0 start-0 shadow-xl border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="https://webrelacon.com/" className="flex items-center space-x-5 rtl:space-x-reverse">
                    <Image src={Logo} width={150} height={250} className="h-10" alt="Flowbite Logo" />
                </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" onClick={() => {
                        window.location.replace("/#contact-form");
                        setVisible(false);
                    }} className="text-white bg-blue-500 hover:bg-blue-800 focus:outline-none font-medium md:p-3 md:w-24 lg:w-44 rounded-lg text-sm px-4 py-2 text-center">Get Free Quote Now</button>
                    <div>
                        <button onClick={toggleNavbar} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-blue-500 rounded-lg md:hidden focus:outline-none">
                            {!open ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-blue"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-blue"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                <div className={`items-center justify-between w-full md:flex hidden md:w-auto md:order-1${open ? "block" : "hidden"
                    }`} id='navbar-id'>

                    <>
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-2 lg:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                            {Links.map(links => {
                                return (
                                    <Link key={links.path} className={classNames({
                                        'text-blue-800 border-b-2 border-blue-800': links.path === currentPath,
                                        'text-blue-500': links.path !== currentPath,
                                        'hover:text-blue-800 transition-colors': true,
                                    })}
                                        onClick={() => {
                                            window.location.replace(links.path);
                                            setVisible(false);
                                        }}
                                        href={links.path}>{links.text}</Link>
                                )
                            })}
                        </ul>
                        {/* <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown hover <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg>
                        </button> */}

                        {/* <!-- Dropdown menu --> */}
                        {/* <div id="dropdownHover" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                                </li>
                            </ul>
                        </div> */}

                    </>

                </div>
                <div className={`items-center justify-between w-full md:flex lg:hidden md:w-auto md:order-1${open ? "block" : "hidden"
                    }`} id='navbar-id'>
                    {!open &&
                        <>
                            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-2 lg:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                                {Links.map(links => {
                                    return (
                                        <Link key={links.path} className={classNames({
                                            'text-blue-800 border-b-2 border-blue-800': links.path === currentPath,
                                            'text-blue-500': links.path !== currentPath,
                                            'hover:text-blue-800 transition-colors': true
                                        })} href={links.path}>{links.text}</Link>
                                    )
                                })}
                            </ul>

                        </>
                    }

                </div>
            </div>
        </nav>
    )
}

export default Navbar