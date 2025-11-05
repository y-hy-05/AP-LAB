import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/APLABLogoPNG.png';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigation = [
        { name: 'Accueil', href: '/' },
        { name: 'À propos', href: '/about' },
        { name: 'Nos prestations', href: '/services' },
        { name: 'Contactez-nous', href: '/contact' },
        { name: 'Blog', href: '/blogs' },
    ];

    return (
        <nav className="bg-[#12121220] backdrop-blur-md shadow-md fixed w-full z-50">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo/Brand Section */}
                    <div className="shrink-0 flex items-center">
                        <Link to="/" className="w-48">
                            <img src={logo} alt="APLAB Logo" />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden z-50 lg:flex lg:items-center lg:space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className="text-[#FFFFFF] hover:text-[#2E7BB5] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center lg:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-[#FFFFFF] hover:text-[#2E7BB5] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isMenuOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-[#12121280] backdrop-blur-md`}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className="block px-3 py-2 rounded-md text-base font-medium text-[#FFFFFF] hover:text-[#2E7BB5] hover:bg-gray-100 transition-colors duration-200"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};
