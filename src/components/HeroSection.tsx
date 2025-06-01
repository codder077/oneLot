'use client';

import React from 'react';

/**
 * HeroSection Component
 *
 * The primary hero section that introduces OneLot's main value proposition.
 * This section is designed to:
 * 1. Immediately communicate the core benefit (grow dealership with working capital)
 * 2. Provide clear calls-to-action
 * 3. Build credibility with key metrics
 * 4. Create visual interest with gradient backgrounds
 *
 * Features responsive design and engaging animations on load.
 */
const HeroSection: React.FC = () => {
    // Handle CTA button click
    const handleGetStarted = (): void => {
        // Scroll to contact section or open contact form
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <section
            id="home"
            className="relative pt-20 mt-20 lg:pt-24 pb-16 lg:pb-20 overflow-hidden"
        >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50"></div>

            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-transparent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-200/30 to-transparent rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    {/* Main headline*/}
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-6 animate-fade-in max-w-5xl mx-auto">
                        Grow your dealership with working capital loans and digital tools from OneLot
                    </h1>

                    {/* Subtitle/description */}
                    <p className="max-w-4xl mx-auto text-base sm:text-lg text-gray-600 mb-8 leading-relaxed animate-slide-up">
                        We enable dealers to buy more cars through our working capital loan solutions and
                        sell cars more efficiently through our Dealership Management System with its
                        inventory management, marketing solutions and market insights
                    </p>

                    {/* CTA button - SINGLE INQUIRE NOW BUTTON */}
                    <div className="flex justify-center mb-12 animate-slide-up">
                        <button
                            onClick={handleGetStarted}
                            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                        >
                            Inquire now
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;