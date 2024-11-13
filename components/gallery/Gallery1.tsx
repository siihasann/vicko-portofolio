"use client";
import React, { useState } from 'react';
import { FocusCards } from '../ui/FocusCard';
import { galleryData, type GalleryItem } from '@/data';

const Gallery1 = () => {
    const categories = [...new Set(galleryData.map(item => item.category))];
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const filteredItems = galleryData.filter(item => item.category === activeCategory);

    const groupedGallery: Record<string, GalleryItem[]> = filteredItems.reduce((groups, item) => {
        const category = item.category;
        if (!groups[category]) {
            groups[category] = [];
        }
        groups[category].push(item);
        return groups;
    }, {} as Record<string, GalleryItem[]>);

    return (
        <div className="relative min-h-screen w-full pb-20 pt-5">
            <div className="relative z-10">
                {/* Wrapper for Scrollable Category Filter with Indicators */}
                <div className="relative mb-12">
                    {/* Left and Right Scroll Indicators */}
                    <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-gray-900 opacity-60 pointer-events-none"></div>
                    <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-gray-900 opacity-60 pointer-events-none"></div>

                    {/* Category Filter Buttons */}
                    <div className="flex justify-start lg:justify-center gap-4 overflow-x-auto scrollbar-hide px-8 py-2 scroll-smooth scroll-padding-x-8">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 py-1 sm:px-6 sm:py-2 rounded-full transition-all duration-300 whitespace-nowrap ${
                                    activeCategory === category
                                        ? 'bg-purple-600 text-white'
                                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Gallery Content */}
                {Object.entries(groupedGallery).map(([category, items]) => (
                    <div key={category} className="mb-16">
                        <h2 className="text-2xl font-bold mb-8 text-center text-purple-600">
                            {category}
                        </h2>
                        <FocusCards cards={items.map((item, index) => ({ ...item, key: `${item.category}-${index}` }))} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery1;
