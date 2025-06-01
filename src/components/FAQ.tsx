'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '@/data/content';

/**
 * FAQ section 
 * about OneLot's services and application process.
 */
const FAQ: React.FC = () => {
    const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

    const toggleItem = (index: number): void => {
        const newExpandedItems = new Set(expandedItems);
        if (newExpandedItems.has(index)) {
            newExpandedItems.delete(index);
        } else {
            newExpandedItems.add(index);
        }
        setExpandedItems(newExpandedItems);
    };

    return (
        <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <div className="text-center mb-12">
    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
        Frequently Asked Questions
    </h2>
    <p className="text-lg text-gray-600">
        Get answers to the most common questions about OneLot's services.
    </p>
    </div>

    {/* FAQ items */}
    <div className="space-y-4">
        {faqs.map((faq, index) => (
                <div
                    key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
            <button
                onClick={() => toggleItem(index)}
    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
    >
    <span className="font-semibold text-gray-900 pr-4">
        {faq.question}
        </span>
    {expandedItems.has(index) ? (
        <Minus className="w-5 h-5 text-purple-600 flex-shrink-0" />
    ) : (
        <Plus className="w-5 h-5 text-purple-600 flex-shrink-0" />
    )}
    </button>

    {expandedItems.has(index) && (
        <div className="px-6 pb-4">
        <div className="text-gray-600 leading-relaxed">
            {faq.answer}
            </div>
            </div>
    )}
    </div>
))}
    </div>

    {/* Contact */}
    <div className="text-center mt-12">
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
        See All
    </button>
    </div>
    </div>
    </section>
);
};

export default FAQ;