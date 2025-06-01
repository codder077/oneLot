'use client';

import React from 'react';
import { Facebook, Instagram, Heart, MessageCircle, Share, MoreHorizontal } from 'lucide-react';

/**
 * StayConnected Component
 *
 * Social media section showing Facebook-style posts with OneLot branding
 * and call-to-action buttons to follow on social platforms.
 */
const StayConnected: React.FC = () => {
    // Social media posts data
    const socialPosts = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop&crop=center&auto=format&q=75&cs=tinysrgb',
            text: 'Style and performance combine for this sleek Toyota Fortuner. Visit our dealer platform today, and your cars easier',
            likes: 177,
            comments: 42,
            shares: 5,
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop&crop=center&auto=format&q=75&cs=tinysrgb',
            text: 'Luxury meets performance in the exquisite Lexus UX. Sign-up OneLot\'s dealer platform today, and your cars easier https://one-lot.com/',
            likes: 177,
            comments: 42,
            shares: 5,
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop&crop=center&auto=format&q=75&cs=tinysrgb',
            text: 'Efficiency never looked so good - introducing the fuel-efficient Honda Civic. Sign-up OneLot\'s dealer platform today, and your cars easier https://one-lot.com/',
            likes: 177,
            comments: 42,
            shares: 5,
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop&crop=center&auto=format&q=75&cs=tinysrgb',
            text: 'Adventure awaits in the rugged yet refined Honda Civic Type R. Sign-up OneLot\'s dealer platform today, and your cars easier https://one-lot.com/',
            likes: 177,
            comments: 42,
            shares: 5,
        },
        {
            id: 5,
            image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop&crop=center&auto=format&q=75&cs=tinysrgb',
            text: 'Rev up your dreams with our stunning lineup of high-performance vehicles! Location: Quezon City, Manila Year: 2020 Make: Honda',
            likes: 177,
            comments: 42,
            shares: 5,
        },
    ];

    return (
        <section className="py-16 lg:py-20 bg-gray-50">
            <div className="w-full">
                {/* Section header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                        Stay connected
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                        Follow OneLot on our Facebook and Instagram page and stay up to
                        date with our most recent recent offers, updates and new product
                        features
                    </p>

                    {/* Social media buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <button onClick={() => window.open("https://www.facebook.com/OneLotPH", "_blank")}
                         className="flex items-center space-x-3 px-8 py-3 bg-white border-2 border-gray-300 rounded-full hover:border-blue-500 hover:text-blue-600 transition-colors duration-200 font-medium">
                            <Facebook className="w-5 h-5" />
                            <span>Follow us on Facebook</span>
                        </button>
                        <button onClick={() => window.open("https://www.instagram.com/onelot.ph/", "_blank")}
                         className="flex items-center space-x-3 px-8 py-3 bg-white border-2 border-gray-300 rounded-full hover:border-pink-500 hover:text-pink-600 transition-colors duration-200 font-medium">
                            <Instagram className="w-5 h-5" />
                            <span>Follow us on Instagram</span>
                        </button>
                    </div>
                </div>

                {/* Social media posts grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 w-full px-2 sm:px-4 lg:px-8">
                    {socialPosts.map((post) => (
                        <div key={post.id} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden flex flex-col h-full min-h-[420px]">
                            {/* Post header */}
                            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div
                                        className="clip-path-frame flex items-center justify-center"
                                        style={{
                                            backgroundImage: "url(https://c.animaapp.com/AJQOmVkv/img/rectangle@2x.png)",
                                            backgroundSize: "100% 100%",
                                            height: "40px",
                                            width: "90px",
                                            display: "block"
                                        }}
                                    ></div>
                                    <div className="font-semibold text-sm text-gray-900">OneLot</div>
                                </div>
                                <MoreHorizontal className="w-4 h-4 text-gray-400" />
                            </div>

                            {/* Post image */}
                            <div className="aspect-[4/3] bg-gray-100 w-full rounded-b-lg overflow-hidden">
                                <img
                                    src={post.image}
                                    alt="Featured vehicle"
                                    className="w-full h-full object-cover rounded-b-lg"
                                />
                            </div>

                            {/* Post content */}
                            <div className="p-4 flex-1 flex flex-col justify-between">
                                <p className="text-sm text-gray-700 mb-4 leading-relaxed line-clamp-3">
                                    {post.text}
                                </p>
                            </div>

                            {/* Post engagement */}
                            <div className="p-4 pt-2 border-t border-gray-100">
                                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                                    <div className="flex items-center space-x-2">
                                        {/* Facebook-style reactions */}
                                        <div className="flex -space-x-1">
                                            <span className="text-lg" title="Like">👍</span>
                                            <span className="text-lg" title="Love">❤️</span>
                                            <span className="text-lg" title="Haha">😂</span>
                                        </div>
                                        <span className="ml-2">{post.likes}</span>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <span>{post.comments} Comments</span>
                                        <span>{post.shares} Shares</span>
                                    </div>
                                </div>

                                {/* Action buttons */}
                                <div className="flex items-center justify-between pt-3">
                                    <button className="flex-1 flex items-center justify-center space-x-2 text-gray-600 hover:text-red-500 transition-colors duration-200 py-2 font-medium text-xs">
                                        <Heart className="w-4 h-4" />
                                        <span>Like</span>
                                    </button>
                                    <button className="flex-1 flex items-center justify-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors duration-200 py-2 font-medium text-xs">
                                        <MessageCircle className="w-4 h-4" />
                                        <span>Comment</span>
                                    </button>
                                    <button className="flex-1 flex items-center justify-center space-x-2 text-gray-600 hover:text-green-500 transition-colors duration-200 py-2 font-medium text-xs">
                                        <Share className="w-4 h-4" />
                                        <span>Share</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StayConnected;