'use client';

import React from 'react';
import { DollarSign, BarChart3, ArrowRight } from 'lucide-react';

/**
 * BusinessFeatures Component
 *
 * Displays the "Everything you need to grow your business" section.
 * this highlights
 * 1. Dealer Loans
 * 2. Dealership Management System
 *
 * i used two-column layout with feature cards on the right.
 */
const BusinessFeatures: React.FC = () => {
    return (
        <section className="py-16 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left side - Content */}
                    <div className="lg:pr-8">
                        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            Everything you need to grow your business
                        </h2>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            OneLot is your trusted lending and financing partner,
                            exclusively tailored for used car dealership. We also offer
                            digital tools for streamlined operations and growth of
                            your dealership.
                        </p>

                        {/* Learn more button */}
                        <button className="group inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-semibold text-lg transition-colors duration-200">
                            <span>Learn more</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                        </button>
                    </div>

                    {/* Right side  cards */}
                    <div className="space-y-6">
                        {/* Dealer Loans Card */}
                        <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-start space-x-4">
                                { }
                                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <DollarSign className="w-6 h-6 text-cyan-600" />
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        Dealer Loans
                                    </h3>

                                    {/* Subtitle */}
                                    <h4 className="text-lg font-semibold text-blue-400 mb-3">
                                        Accelerate your growth with tailored loan solutions
                                    </h4>

                                    {/* Description */}
                                    <p className="text-gray-600 leading-relaxed">
                                        Get comprehensive car financing solutions, unlock the potential of your
                                        dealership and take it to new heights.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Dealership Management System Card */}
                        <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-start space-x-4">
                                {/* Icon */}
                                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <BarChart3 className="w-6 h-6 text-purple-600" />
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        Dealership Management System
                                    </h3>

                                    {/* Subtitle */}
                                    <h4 className="text-lg font-semibold text-purple-500 mb-3">
                                        Enhance Efficiency and Sales with free digital tools for car dealerships
                                    </h4>

                                    {/* Description */}
                                    <p className="text-gray-600 leading-relaxed">
                                        OneLot offers a suite of powerful digital tools designed to optimize your
                                        dealership's operations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessFeatures;