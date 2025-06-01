'use client';

import React from 'react';
import { Lock, TrendingUp, Zap, Truck, ThumbsUp } from 'lucide-react';

/**
 * WhyOneLot Component
 *
 * Displays the key benefits and reasons to choose OneLot
 * in a clean 5-column grid layout with purple icons and descriptions.
 */
const WhyOneLot: React.FC = () => {
    // Benefits data matching the image
    const benefits = [
        {
            icon: Lock,
            title: 'Trust',
            description: 'Regulated by Securities and Exchange Commission (SEC) Philippines'
        },
        {
            icon: TrendingUp,
            title: 'High Amount',
            description: 'Get the highest loan amounts compared to other banks and lenders'
        },
        {
            icon: Zap,
            title: 'Fast',
            description: 'Get the money within a few hours on the same day'
        },
        {
            icon: Truck,
            title: 'Flexible',
            description: 'Loans are tailored to your needs'
        },
        {
            icon: ThumbsUp,
            title: 'Easy',
            description: 'Run through an easy process and get your first loans within days'
        }
    ];

    return (
        <section className="py-16 lg:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Why OneLot?
                    </h2>
                </div>

                {/* Benefits grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
                    {benefits.map((benefit, index) => {
                        const IconComponent = benefit.icon;

                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
                            >
                                {/* Icon */}
                                <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-2xl flex items-center justify-center">
                                    <IconComponent className="w-8 h-8 text-purple-600" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {benefit.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {benefit.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyOneLot;