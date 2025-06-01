'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navigationItems } from '@/data/content';

/**
 * Header Component
 *
 * Provides the main navigation for the OneLot website.
 * Features:
 * - Responsive design with mobile hamburger menu
 * - Fixed positioning for persistent navigation
 * - Smooth scroll to sections on click
 * - Brand logo and navigation items on left 
 * - Mobile-first approach with breakpoint handling
 * - Login buttons on the right side 
 */
const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    // Handle scroll effect on header background
    useEffect(() => {
        const handleScroll = (): void => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Toggle for mobile menu visibility
    const toggleMenu = (): void => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Handle navigation item clicks
    const handleNavClick = (href: string): void => {
        
        setIsMenuOpen(false);

        // if we use links it will be sooth scroll
        if (href.startsWith('#')) {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white shadow-lg backdrop-blur-md'
                    : 'bg-white/95 backdrop-blur-sm'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 lg:h-20">
                    {/* Logo section */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <div className="flex items-center space-x-3">
                                {/* OneLot logo  */}
                                <div
  className="clip-path-frame"
  style={{
    backgroundImage: "url(https://c.animaapp.com/AJQOmVkv/img/rectangle@2x.png)",
    backgroundSize: "100% 100%",
    height: "79px",
    left: "28px",
    position: "absolute",
    top: "0",
    width: "148px"
  }}
></div>
                            </div>
                        </div>
                    </div>

                    {/* Desktop navigation */}
                    <nav className="hidden lg:block flex-1">
                        <ul className="flex items-center justify-center space-x-8">
                            {navigationItems.map((item, index) => (
                                <li key={index} className="relative">
                                    <button
                                        onClick={() => handleNavClick(item.href)}
                                        className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md hover:bg-purple-50 flex items-center gap-1"
                                    >
                                        {item.label}
                                        {/*  dropdown arrow buttun for Products */}
                                        {item.label === 'Products' && (
                                            <ChevronDown className="w-4 h-4" />
                                        )}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Right side - Login */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {/* Log In link */}
                        <button
                            onClick={() => handleNavClick('#login')}
                            className="text-gray-700 hover:text-purple-600 text-sm font-medium transition-colors duration-200"
                        >
                            Log In
                        </button>

                        {/* Inquire now button */}
                        <button
                            onClick={() => handleNavClick('#contact')}
                            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
                        >
                            Inquire now
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile view-menu */}
            {isMenuOpen && (
                <div className="lg:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200 shadow-lg">
                        {navigationItems.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => handleNavClick(item.href)}
                                className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium w-full text-left rounded-md hover:bg-purple-50 transition-colors duration-200 flex items-center justify-between"
                            >
                                {item.label}
                                {/* dropdown arrow for Products in mobile */}
                                {item.label === 'Products' && (
                                    <ChevronDown className="w-4 h-4" />
                                )}
                            </button>
                        ))}

                        {/* Mobile Login  */}
                        <div className="pt-4 pb-2 space-y-2">
                            <button
                                onClick={() => handleNavClick('#login')}
                                className="w-full text-gray-700 hover:text-purple-600 px-3 py-2 text-base font-medium text-center transition-colors duration-200"
                            >
                                Log In
                            </button>
                            <button
                                onClick={() => handleNavClick('#contact')}
                                className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200"
                            >
                                Inquire now
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;