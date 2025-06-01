'use client';

import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

/**
 * Footer Component
 *
 * just simple footer with OneLot branding, navigation links,
 * language selector, and copyright information.
 */
const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-gray-200 w-full">
            {/* Main footer content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-12">
                    <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
                        {/* Left side - Logo */}
                        <div className="flex items-center space-x-3">
                            <div
                                className="clip-path-frame"
                                style={{
                                    backgroundImage: "url(https://c.animaapp.com/AJQOmVkv/img/rectangle@2x.png)",
                                    backgroundSize: "100% 100%",
                                    height: "79px",
                                    width: "148px",
                                    display: "block"
                                }}
                            ></div>
                        </div>

                        {/* Center - Navigation */}
                        <nav className="flex items-center space-x-8">
                            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                                Home
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                                Features
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                                About
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                                Contact
                            </a>
                        </nav>

                        {/* Right side - Language selector */}
                        <div className="flex items-center space-x-2">
                            <span className="text-gray-600 text-sm">ENG</span>
                            <div className="w-6 h-4 bg-red-500 rounded-sm flex items-center justify-center">
                                <div className="flex space-x-0.5">
                                    <div className="w-0.5 h-2 bg-white"></div>
                                    <div className="w-0.5 h-2 bg-blue-600"></div>
                                    <div className="w-0.5 h-2 bg-white"></div>
                                    <div className="w-0.5 h-2 bg-red-500"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom footer */}
                <div className="border-t border-gray-200 py-6 w-full">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-2">
                        {/* Copyrights */}
                        <div className="space-y-1">
                            <div className="text-gray-500 text-sm">
                                © 2023 OneLot Technologies Incorporated Pte. Ltd. All rights reserved.
                            </div>
                            <div className="text-gray-500 text-sm">
                                © 2023 OneLot Financing Corporation All rights reserved.
                            </div>
                        </div>

                        {/* Social media icons and links I made it clickable u will reach onelot social media handles */}
                        <div className="flex items-center space-x-3">
                            <a
                                href="https://www.instagram.com/onelot.ph/"
                                className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors duration-200"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-4 h-4 text-white" />
                            </a>
                            <a
                                href="https://www.facebook.com/OneLotPH"
                                className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-4 h-4 text-white" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;