import React from 'react';
import Navbar from '../components/shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/shared/Footer';

const RootLayouts = () => {
    return (
        <div>
            <header>
                <Navbar/>
            </header>

            <main>
                <Outlet/>
            </main>

            <footer>
                <Footer/>
            </footer>
                
        </div>
    );
};

export default RootLayouts;