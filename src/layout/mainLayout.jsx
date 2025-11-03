import React from 'react';
import { Navbar } from './navbar';
import { Outlet } from 'react-router-dom';

export const Main = () => {
    return (
        <>
            <main className="min-h-screen">
                <nav className='fixed w-full top-0 z-50'>
                    <Navbar />
                </nav>
                <div className="pt-16">
                    <Outlet />
                </div>
                <footer>
                </footer>
            </main>
        </>
    );
};

