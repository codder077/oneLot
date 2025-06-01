'use client';

import React from 'react';
import { Filter, Grid, List, ArrowRight, Check } from 'lucide-react';

/**
 * CarFinancing Component
 *
 * Displays the car forfinancing section with a car loan interface on the left
 * and dealer loan information on the right.
 * 
 * Featueres:
 * 1. Interactive car loan grid showing vehicles with there pricew
 * 2. Dealer loan benefits and features
 * 3. Call-to-action for viewing loans
 */
const CarFinancing: React.FC = () => {
    // Sample car data for the loan interface
    const carLoans = [
        {
            id: 1,
            make: 'Toyota',
            model: 'Camry',
            year: 2015,
            price: 'PHP 878,000',
            image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=300&h=200&fit=crop&crop=center&auto=format&q=75&cs=tinysrgb',
            interest: '1.5%/month interest',
            financing: '60 Days Financing Period',
            percentage: '70% Financing for vehicle purchase'
        },
        {
            id: 2,
            make: 'Toyota',
            model: 'Camry',
            year: 2020,
            price: 'PHP 1,000,000',
            image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=300&h=200&fit=crop&crop=center&auto=format&q=75&cs=tinysrgb',
            interest: '1.5%/month interest',
            financing: '60 Days Financing Period',
            percentage: '70% Financing for vehicle purchase'
        },
        {
            id: 3,
            make: 'Toyota',
            model: 'Camry',
            year: 2015,
            price: 'PHP 788,000',
            image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop&crop=center&auto=format&q=75&cs=tinysrgb',
            interest: '1.5%/month interest',
            financing: '60 Days Financing Period',
            percentage: '70% Financing for vehicle purchase'
        },
        {
            id: 4,
            make: 'Toyota',
            model: 'Camry',
            year: 2020,
            price: 'PHP 920,000',
            image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=300&h=200&fit=crop&crop=center&auto=format&q=75&cs=tinysrgb',
            interest: '1.5%/month interest',
            financing: '60 Days Financing Period',
            percentage: '70% Financing for vehicle purchase'
        },
        {
            id: 5,
            make: 'Toyota',
            model: 'Camry',
            year: 2018,
            price: 'PHP 850,000',
            image: 'https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?w=300&h=200&fit=crop&crop=center&auto=format&q=75&cs=tinysrgb',
            interest: '1.5%/month interest',
            financing: '60 Days Financing Period',
            percentage: '70% Financing for vehicle purchase'
        },
        {
            id: 6,
            make: 'Toyota',
            model: 'Camry',
            year: 2019,
            price: 'PHP 980,000',
            image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=300&h=200&fit=crop&crop=center&auto=format&q=75&cs=tinysrgb',
            interest: '1.5%/month interest',
            financing: '60 Days Financing Period',
            percentage: '70% Financing for vehicle purchase'
        }
    ];

    return (
        <section className="py-16 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left side - Car Loan Interface */}
                    <div className="bg-gray-50 rounded-2xl p-6">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <div className="text-sm text-gray-500 mb-1">Vehicles</div>
                                <h3 className="text-xl font-bold text-gray-900">Car Loan</h3>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                                <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
                            </div>
                        </div>

                        {/* Search and Controls */}
                        <div className="flex items-center justify-between mb-6">
                            <input
                                type="text"
                                placeholder="Search for vehicles"
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none mr-4"
                            />
                            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
                                <Filter className="w-4 h-4" />
                                <span>Filter</span>
                            </button>
                            <div className="flex ml-2">
                                <button className="p-2 border border-gray-300 rounded-l-lg bg-gray-100">
                                    <List className="w-4 h-4" />
                                </button>
                                <button className="p-2 border border-gray-300 rounded-r-lg">
                                    <Grid className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Car Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {carLoans.map((car) => (
                                <div key={car.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                                    {/* Car Image */}
                                    <div className="aspect-[4/3] bg-gray-100">
                                        <img
                                            src={car.image}
                                            alt={`${car.year} ${car.make} ${car.model}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Car Details */}
                                    <div className="p-3">
                                        <div className="text-xs text-gray-500 mb-1">Car Loan</div>
                                        <div className="font-bold text-lg text-gray-900 mb-1">{car.price}</div>
                                        <div className="text-xs text-gray-600 mb-3">
                                            {car.year} {car.make} {car.model} 2.5V VVT-i Auto
                                            <br />
                                            40,001 - 50,000 km
                                        </div>

                                        {/* Features */}
                                        <div className="space-y-1 mb-4">
                                            <div className="flex items-center text-xs text-gray-600">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                                {car.interest}
                                            </div>
                                            <div className="flex items-center text-xs text-gray-600">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                                {car.financing}
                                            </div>
                                            <div className="flex items-center text-xs text-gray-600">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                                {car.percentage}
                                            </div>
                                        </div>

                                        {/* Choose Plan Button */}
                                        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                                            Choose plan
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right side - Dealer Loans Content */}
                    <div className="lg:pl-8">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                            Car Financing
                        </h2>

                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            Dealer Loans
                        </h3>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            OneLot's working capital loans allows car dealer to buy more cars and capitalize on car purchase opportunities you would otherwise have missed. We transfer the money to your account within 6 hours.
                        </p>

                        {/* Features List */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start space-x-3">
                                <Check className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">Interest as low as 1.5% per month with daily calculation of interest</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Check className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">Financing up to 70% of the vehicle purchase</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Check className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">Financing period up to 90 days with flexible repayment schedule at any point</span>
                            </div>
                        </div>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Use OneLot's financing solution today, grow the number of cars in your lot and increase your profits.
                        </p>

                        {/* CTA Button */}
                        <button className="group inline-flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-200">
                            <span>View Loans</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarFinancing;