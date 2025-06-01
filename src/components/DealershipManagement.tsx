'use client';

import React from 'react';
import { ArrowRight, Plus, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * DealershipManagement Component
 *
 * Showcases the dealership management system with a detailed
 * vehicle management interface and feature descriptions.
 */
const DealershipManagement: React.FC = () => {
    // Sample vehicle data for the table
    const vehicles = [
        { id: 'AZ1234', make: 'Audi', category: 'Cars & Trucks', model: 'A3 Sedan', mileage: 1000, price: '₱16,000,000', date: 'Oct 18 2023' },
        { id: 'DAE456', make: 'Toyota', category: 'Cars & Trucks', model: 'Fortuner', mileage: 1000, price: '₱12,000,000', date: 'Oct 15 2023' },
        { id: 'TN1234', make: 'Hyundai', category: 'Cars & Trucks', model: 'Santa Fe', mileage: 1500, price: '₱13,000,000', date: 'Oct 14 2023' },
        { id: 'ZBD1132', make: 'Ford', category: 'Cars & Trucks', model: 'Ranger', mileage: 2000, price: '₱13,000,000', date: 'Oct 13 2023' },
        { id: 'ABC678', make: 'Lexus', category: 'Cars & Trucks', model: 'LX', mileage: 2000, price: '₱21,000,000', date: 'Oct 12 2023' },
        { id: 'AZ1234', make: 'Audi', category: 'Cars & Trucks', model: 'A3 Sedan', mileage: 2000, price: '₱19,000,000', date: 'Oct 11 2023' },
        { id: 'DAE456', make: 'Toyota', category: 'Cars & Trucks', model: 'Fortuner', mileage: 2000, price: '₱19,000,000', date: 'Oct 10 2023' },
        { id: 'TN1234', make: 'Hyundai', category: 'Cars & Trucks', model: 'Santa Fe', mileage: 2000, price: '₱19,000,000', date: 'Oct 9 2023' },
        { id: 'ZBD1132', make: 'Ford', category: 'Cars & Trucks', model: 'Ranger', mileage: 2000, price: '₱19,000,000', date: 'Oct 8 2023' },
        { id: 'ABC678', make: 'Lexus', category: 'Cars & Trucks', model: 'Ranger', mileage: 3000, price: '₱19,000,000', date: 'Oct 7 2023' },
        { id: 'JHK123', make: 'Lexus', category: 'Cars & Trucks', model: 'LX', mileage: 2000, price: '₱19,000,000', date: 'Oct 6 2023' },
    ];

    return (
        <section className="py-16 lg:py-20 bg-gray-50">
            <div className="max-w-12xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left side - Content */}
                    <div className="lg:pr-8">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                            Dealership Management System
                        </h2>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            OneLot's digital platform has been build with the single goal to help used car dealers to operate their business more efficiently.
                        </p>

                        {/* Features list */}
                        <div className="space-y-6 mb-8">
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Inventory Management:</h4>
                                    <p className="text-gray-600">
                                        Track all details about your cars and sales in one place - from car details to buyers. All you need to now in one place
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Marketing Tools:</h4>
                                    <p className="text-gray-600">
                                        Promote your cars across all the different platforms. Write a marketing text and upload on Facebook Marketplace, Groups, Pages and Instagram with a single click of a button
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Market Insights (Coming Soon):</h4>
                                    <p className="text-gray-600">
                                        Get insights on prices and volumes for all cars in the market. We provide you all the date by combining data from various sources with a single click of a button.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <p className="text-lg text-gray-600 mb-8">
                            Sign-up OneLot's dealer platform today, and your cars easier.
                        </p>

                        {/* explore now Button */}
                        <button className="group inline-flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-200">
                            <span>Explore now</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                        </button>
                    </div>

                    {/* Right side - Dashboard Interface */}
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-scroll">
                        {/* Sidebar */}
                        <div className="flex">
                            <div className="w-48 bg-gray-50 border-r border-gray-200 p-4">
                                {/* Logo */}
                                <div className="flex items-center space-x-2 mb-6">
                                    <div className="w-6 h-6 bg-purple-600 rounded-lg flex items-center justify-center">
                                        <span className="text-white font-bold text-xs">O</span>
                                    </div>
                                    <span className="font-bold text-gray-900 text-sm">OneLot</span>
                                </div>

                                {/* Navigation */}
                                <nav className="space-y-1">
                                    <div className="flex items-center space-x-2 px-3 py-2 text-purple-600 bg-purple-50 rounded-lg text-sm">
                                        <div className="w-4 h-4 bg-purple-600 rounded"></div>
                                        <span>Dashboard</span>
                                    </div>

                                    <div className="px-3 py-2">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-2">
                                                <div className="w-4 h-4 bg-blue-500 rounded"></div>
                                                <span className="text-sm text-gray-700">Fleet</span>
                                            </div>
                                            <ChevronDown className="w-3 h-3 text-gray-400" />
                                        </div>
                                        <div className="ml-6 mt-1">
                                            <div className="px-2 py-1 text-xs text-gray-700 bg-gray-100 rounded">
                                                Vehicles
                                            </div>
                                        </div>
                                    </div>

                                    <div className="px-3 py-2">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-2">
                                                <div className="w-4 h-4 bg-cyan-500 rounded"></div>
                                                <span className="text-sm text-gray-700">Marketing</span>
                                            </div>
                                            <ChevronDown className="w-3 h-3 text-gray-400" />
                                        </div>
                                        <div className="ml-6 mt-1">
                                            <div className="px-2 py-1 text-xs text-gray-700">
                                                Posts
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>

                            {/* Main Content */}
                            <div className="flex-1">
                                {/* Header */}
                                <div className="p-4 border-b border-gray-200">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-xs text-gray-500 mb-1">Vehicles</div>
                                            <h3 className="text-lg font-semibold text-gray-900">Vehicles</h3>
                                        </div>
                                        <button className="flex items-center space-x-2 px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-xs font-medium">
                                            <Plus className="w-3 h-3" />
                                            <span>New vehicle</span>
                                        </button>
                                    </div>

                                    {/* Search */}
                                    <div className="mt-4">
                                        <input
                                            type="text"
                                            placeholder="Search for vehicles"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Table */}
                                <div className="overflow-x-auto">
                                    <table className="w-full text-xs">
                                        <thead className="bg-gray-50 border-b border-gray-200">
                                        <tr>
                                            <th className="px-3 py-2 text-left text-gray-600 font-medium">LICENSE PLATE</th>
                                            <th className="px-3 py-2 text-left text-gray-600 font-medium">MAKE</th>
                                            <th className="px-3 py-2 text-left text-gray-600 font-medium">CATEGORY</th>
                                            <th className="px-3 py-2 text-left text-gray-600 font-medium">MODEL</th>
                                            <th className="px-3 py-2 text-left text-gray-600 font-medium">MILEAGE ↓</th>
                                            <th className="px-3 py-2 text-left text-gray-600 font-medium">BUYING PRICE ↓</th>
                                            <th className="px-3 py-2 text-left text-gray-600 font-medium">DATE ADDED</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {vehicles.map((vehicle, index) => (
                                            <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                                <td className="px-3 py-2 text-gray-900">{vehicle.id}</td>
                                                <td className="px-3 py-2 text-gray-900">{vehicle.make}</td>
                                                <td className="px-3 py-2">
                                                        <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">
                                                            {vehicle.category}
                                                        </span>
                                                </td>
                                                <td className="px-3 py-2 text-gray-900">{vehicle.model}</td>
                                                <td className="px-3 py-2 text-gray-900">{vehicle.mileage}</td>
                                                <td className="px-3 py-2 text-gray-900">{vehicle.price}</td>
                                                <td className="px-3 py-2 text-gray-500">{vehicle.date}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Pagination */}
                                <div className="flex items-center justify-between p-4 border-t border-gray-200">
                                    <div className="text-xs text-gray-500">Showing 1-10 of 1000</div>
                                    <div className="flex items-center space-x-2">
                                        <button className="p-1 hover:bg-gray-100 rounded">
                                            <ChevronLeft className="w-4 h-4 text-gray-400" />
                                        </button>
                                        <button className="px-2 py-1 bg-purple-600 text-white rounded text-xs">1</button>
                                        <button className="px-2 py-1 hover:bg-gray-100 rounded text-xs">2</button>
                                        <button className="px-2 py-1 hover:bg-gray-100 rounded text-xs">3</button>
                                        <button className="p-1 hover:bg-gray-100 rounded">
                                            <ChevronRight className="w-4 h-4 text-gray-400" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DealershipManagement;