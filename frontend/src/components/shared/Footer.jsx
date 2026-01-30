import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-800 text-white py-6">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; {new Date().getFullYear()} Medix - Smart Medicine Inventory Management System</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;