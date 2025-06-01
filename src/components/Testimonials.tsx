'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Testimonials Component
 *
 * Clean and simple testimonial section with centered content,
 * real customer photo and navigation arrows.
 */
const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    // Sample testimonials data - replace with your actual data
    const testimonials = [
        {
            id: 1,
            content: "First : The service of OneLot is top notch, they act fast and can provide dealers with the funds they need, when they need it.",
            name: "Mark Vergel de Dios",
            position: "Owner",
            company: "MVD Auto Works",
            image: "https://c.animaapp.com/AJQOmVkv/img/clip-path-group-11@2x.png"
        },
        // Add more testimonials as needed
        {
            id: 2,
            content: "Second : The service of OneLot is top notch, they act fast and can provide dealers with the funds they need, when they need it.",
            name: "Mark Vergel de Dios",
            position: "Owner",
            company: "MVD Auto Works",
            image: "https://c.animaapp.com/AJQOmVkv/img/clip-path-group-11@2x.png"
        },
        {
            id: 3,
            content: "Third : The service of OneLot is top notch, they act fast and can provide dealers with the funds they need, when they need it.",
            name: "Mark Vergel de Dios",
            position: "Owner",
            company: "MVD Auto Works",
            image: "https://c.animaapp.com/AJQOmVkv/img/clip-path-group-11@2x.png"
        }
    ];

    const nextTestimonial = (): void => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = (): void => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section className="py-16 lg:py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Section header */}
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
                    Testimonials
                </h2>

                {/* Customer photo */}
                <div className="mb-8">
                    <img
                        src={currentTestimonial.image}
                        alt={currentTestimonial.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg"
                    />
                </div>

                {/* Testimonial quote */}
                <blockquote className="text-xl lg:text-2xl text-gray-800 font-medium leading-relaxed mb-8 max-w-3xl mx-auto">
                    "{currentTestimonial.content}"
                </blockquote>

                {/* Customer info */}
                <div className="mb-8">
                    <div className="font-semibold text-gray-900 text-lg mb-1">
                        {currentTestimonial.name}
                    </div>
                    <div className="text-gray-600">
                        {currentTestimonial.position}, {currentTestimonial.company}
                    </div>
                </div>

                {/* Navigation arrows */}
                <div className="flex items-center justify-center space-x-4">
                    <button
                        onClick={prevTestimonial}
                        className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200"
                        aria-label="Previous testimonial"
                        disabled={testimonials.length <= 1}
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-600" />
                    </button>
                    <button
                        onClick={nextTestimonial}
                        className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200"
                        aria-label="Next testimonial"
                        disabled={testimonials.length <= 1}
                    >
                        <ChevronRight className="w-5 h-5 text-gray-600" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;