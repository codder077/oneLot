'use client';

import React, { useState } from 'react';
import {
    Search,
    Filter,
    Grid,
    Plus,
    ChevronDown,
    MoreVertical,
    TrendingUp,
    Car,
    Users,
    MessageSquare,
    Heart,
    Share,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';
import { carInventory, type CarInventoryItem } from '@/data/content';

/**
 * DashboardPreview Component
 *
 * Full dashboard interface showing the OneLot dealership management system.
 * Features:
 * 1. Sidebar navigation with menu items
 * 2. Metrics  statistics
 * 3. Vehicle inventory with search and filters
 * 4. Social media  panel
 * 5. Responsive design matching the provided mockup
 */
const DashboardPreview: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);

    // Filter cars based on search term
    const filteredCars = carInventory.filter(car =>
        car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.model.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const vehiclesPerPage = 8;
    const totalPages = Math.ceil(filteredCars.length / vehiclesPerPage);
    const startIndex = (currentPage - 1) * vehiclesPerPage;
    const displayedVehicles = filteredCars.slice(startIndex, startIndex + vehiclesPerPage);

    return (
        <section className="py-16 lg:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Dashboard container */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                    <div className="flex">
                        {/* Sidebar */}
                        <div className="w-64 bg-gray-50 border-r border-gray-200 p-4">
                            {/* Logo */}
                            <div className="flex items-center space-x-2 mb-8">
                                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">O</span>
                                </div>
                                <span className="font-bold text-gray-900">OneLot</span>
                            </div>

                            {/* Navigation */}
                            <nav className="space-y-2">
                                <div className="flex items-center space-x-3 px-3 py-2 text-purple-600 bg-purple-50 rounded-lg">
                                    <Users className="w-4 h-4" />
                                    <span className="text-sm font-medium">Dashboard</span>
                                </div>

                                <div className="px-3 py-2">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <Car className="w-4 h-4 text-gray-500" />
                                            <span className="text-sm text-gray-700">Fleet</span>
                                        </div>
                                        <ChevronDown className="w-4 h-4 text-gray-400" />
                                    </div>
                                    <div className="ml-7 mt-2">
                                        <div className="px-3 py-1 text-sm text-purple-600 bg-purple-50 rounded">
                                            Vehicles
                                        </div>
                                    </div>
                                </div>

                                <div className="px-3 py-2">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <TrendingUp className="w-4 h-4 text-gray-500" />
                                            <span className="text-sm text-gray-700">Marketing</span>
                                        </div>
                                        <ChevronDown className="w-4 h-4 text-gray-400" />
                                    </div>
                                    <div className="ml-7 mt-2">
                                        <div className="px-3 py-1 text-sm text-gray-700">
                                            Posts
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>

                        {/* Main content */}
                        <div className="flex-1">
                            {/* Top section with metrics */}
                            <div className="p-6 bg-white border-b border-gray-200">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                                            <span>Vehicles</span>
                                        </div>
                                        <h1 className="text-2xl font-bold text-gray-900">Vehicles</h1>
                                    </div>

                                    {/* Reach metrics */}
                                    <div className="bg-white rounded-lg border border-gray-200 p-4 min-w-[200px]">
                                        <div className="text-sm text-gray-500 mb-1">Reach</div>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="text-2xl font-bold text-gray-900">50,000</div>
                                                <div className="text-sm text-green-600 flex items-center">
                                                    <TrendingUp className="w-3 h-3 mr-1" />
                                                    10% vs last month
                                                </div>
                                            </div>
                                            <div className="w-16 h-8">
                                                <svg className="w-full h-full" viewBox="0 0 64 32">
                                                    <path
                                                        d="M2 30 L12 25 L22 20 L32 15 L42 12 L52 8 L62 5"
                                                        stroke="#10b981"
                                                        strokeWidth="2"
                                                        fill="none"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Controls */}
                                <div className="flex items-center justify-between">
                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                        <input
                                            type="text"
                                            placeholder="Search for vehicles"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none w-64"
                                        />
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors duration-200">
                                            <Plus className="w-4 h-4" />
                                            <span>New vehicle</span>
                                        </button>

                                        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium transition-colors duration-200">
                                            <Filter className="w-4 h-4" />
                                            <span>Filter</span>
                                            <ChevronDown className="w-4 h-4" />
                                        </button>

                                        <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                                            <Grid className="w-4 h-4 text-gray-500" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Content area */}
                            <div className="flex">
                                {/* Vehicle grid */}
                                <div className="flex-1 p-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
                                        {displayedVehicles.map((car: CarInventoryItem, index: number) => {
                                            const vehicleCode = `${car.make.substring(0, 3).toUpperCase()}${String(1234 + index).padStart(4, '0')}`;
                                            return (
                                                <div key={car.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200">
                                                    <div className="aspect-[4/3] bg-gray-100 relative">
                                                        <img
                                                            src={`https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop&crop=center&auto=format&q=75&cs=tinysrgb&sig=${index}`}
                                                            alt={`${car.year} ${car.make} ${car.model}`}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <div className="p-3">
                                                        <div className="text-xs text-gray-500 mb-1">Cars & Trucks</div>
                                                        <div className="font-semibold text-gray-900 text-sm mb-1">{vehicleCode}</div>
                                                        <div className="text-xs text-gray-600">{car.make}, {car.model}</div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* Pagination */}
                                    <div className="flex items-center justify-between text-sm text-gray-500">
                                        <div>Showing 1-{Math.min(vehiclesPerPage, filteredCars.length)} of {filteredCars.length}</div>
                                        <div className="flex items-center space-x-2">
                                            <button
                                                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                                                disabled={currentPage === 1}
                                                className="p-1 hover:bg-gray-100 rounded disabled:opacity-50"
                                            >
                                                <ChevronLeft className="w-4 h-4" />
                                            </button>
                                            {[1, 2, 3].map(page => (
                                                <button
                                                    key={page}
                                                    onClick={() => setCurrentPage(page)}
                                                    className={`px-2 py-1 rounded ${currentPage === page ? 'bg-purple-600 text-white' : 'hover:bg-gray-100'}`}
                                                >
                                                    {page}
                                                </button>
                                            ))}
                                            <span>...</span>
                                            <button className="px-2 py-1 hover:bg-gray-100 rounded">100</button>
                                            <button
                                                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                                                disabled={currentPage === totalPages}
                                                className="p-1 hover:bg-gray-100 rounded disabled:opacity-50"
                                            >
                                                <ChevronRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Social media sidebar */}
                                <div className="w-80 bg-gray-50 border-l border-gray-200 p-4">
                                    {/* Social post */}
                                    <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
                                        <div className="flex items-center space-x-3 mb-3">
                                            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                                                <span className="text-white font-semibold text-sm">RA</span>
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-semibold text-sm">Ryan Agoncillo</div>
                                                <div className="text-xs text-gray-500">Location: Quezon City, Manila</div>
                                                <div className="text-xs text-gray-500">Year: 2022</div>
                                                <div className="text-xs text-gray-500">Make: Mitsubishi</div>
                                            </div>
                                            <MoreVertical className="w-4 h-4 text-gray-400" />
                                        </div>

                                        <p className="text-sm text-gray-700 mb-3">
                                            Rev up your dreams with our stunning lineup of high-performance vehicles! 🚗
                                            #CarEnthusiast #DreamRide
                                        </p>

                                        <div className="aspect-[16/9] bg-gray-100 rounded-lg mb-3 relative overflow-hidden">
                                            <img
                                                src="https://images.unsplash.com/photo-1563720223185-11003d516935?w=400&h=225&fit=crop&crop=center&auto=format&q=75&cs=tinysrgb"
                                                alt="Red sports car"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                                            <div className="flex items-center space-x-4">
                                                <span className="flex items-center space-x-1">
                                                    <Heart className="w-4 h-4 text-red-500 fill-current" />
                                                    <span>177</span>
                                                </span>
                                                <span>42 Comments</span>
                                                <span>5 Shares</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                                            <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-800">
                                                <Heart className="w-4 h-4" />
                                                <span className="text-sm">Like</span>
                                            </button>
                                            <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-800">
                                                <MessageSquare className="w-4 h-4" />
                                                <span className="text-sm">Comment</span>
                                            </button>
                                            <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-800">
                                                <Share className="w-4 h-4" />
                                                <span className="text-sm">Share</span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Publish section */}
                                    <div className="bg-white rounded-lg border border-gray-200 p-4">
                                        <div className="text-sm font-medium text-gray-900 mb-3">Publish to</div>
                                        <div className="space-y-2 mb-4">
                                            <label className="flex items-center space-x-2">
                                                <input type="checkbox" className="rounded border-gray-300" />
                                                <span className="text-sm">Facebook Page</span>
                                            </label>
                                            <label className="flex items-center space-x-2">
                                                <input type="checkbox" className="rounded border-gray-300" />
                                                <span className="text-sm">Facebook Group</span>
                                            </label>
                                            <label className="flex items-center space-x-2">
                                                <input type="checkbox" className="rounded border-gray-300" defaultChecked />
                                                <span className="text-sm">Facebook Marketplace</span>
                                            </label>
                                            <label className="flex items-center space-x-2">
                                                <input type="checkbox" className="rounded border-gray-300" />
                                                <span className="text-sm">Instagram</span>
                                            </label>
                                        </div>
                                        <div className="text-xs text-blue-600 mb-4 cursor-pointer">Select all</div>
                                        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg text-sm font-medium">
                                            Publish
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-8 flex justify-center flex-col items-center">
                    <p className="text-gray-600 mb-4">
                        Regulated By
                    </p>
                    
    <img 
      src="./image.png" 
      alt="Security Commission" 
      
    />
                </div>
            </div>
        </section>
    );
};

export default DashboardPreview;
