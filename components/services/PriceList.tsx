import { priceData } from '@/data';
import React from 'react';
import ContactButtonPesan from '../ui/ContactButtonPesan';

const PriceList = () => {
    return (
        <div className="flex items-center justify-center p-10 pt-36">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
                {priceData.map((plan, index) => (
                    <div
                        key={index}
                        className="bg-neutral-200 dark:bg-slate-900 text-white p-6 rounded-lg shadow-lg relative overflow-hidden hover:scale-105 transition-transform duration-300"
                    >
                        <h2 className="text-2xl font-bold mb-2 text-yellow-400 uppercase tracking-wide">{plan.title}</h2>
                        
                        {/* Display discount text */}
                        <p className="text-sm text-gray-400 mb-2">{plan.discount}</p>

                        {/* Display the original and discounted prices */}
                        <p className="text-3xl font-semibold mb-4">
                            <span className="line-through text-gray-400 mr-2">{plan.price.split(" only ")[0]}</span>
                            <span className="text-green-400">{plan.price.split(" only ")[1]}</span>
                        </p>

                        <ul className="mb-4 space-y-2">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center space-x-2">
                                    <span className="text-blue-500">✔</span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="text-gray-400 text-sm mb-6">
                            Get access to all the essential features for your needs.
                        </p>
                        
                        <ContactButtonPesan />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PriceList;
