'use client';

import React from 'react';

/**
 * CTASection Component
 *
 * Simple, centered call-to-action section with clean design.
 * Features centered text and single CTA button.
 */
const CTASection: React.FC = () => {
    return (
        <section id="contact" className="py-16 lg:py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Main heading */}
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    Get started today
                </h2>

                {/* Description */}
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    We look forward to serving the needs of used car dealers across
                    the Philippines and helping them thrive in this dynamic market.
                </p>

                {/* CTA Button */}
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                    Inquire now
                </button>
            </div>
        </section>
    );
};

export default CTASection;