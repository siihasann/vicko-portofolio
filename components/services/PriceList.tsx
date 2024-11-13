import { priceData } from '@/data';
import React from 'react';
import ContactButtonPesan from '../ui/ContactButtonPesan';

const PriceList = () => {
    return (
        <div className="flex items-center justify-center p-10 pt-36">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
                {priceData.map((plan, index) => (
                    <div key={index} className="bg-neutral-200 dark:bg-slate-900 text-white p-6 rounded-lg shadow-lg relative overflow-hidden">
                        <h2 className="text-xl font-bold mb-4">{plan.title}</h2>
                        <p className="text-3xl font-semibold mb-4">{plan.price}</p>
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
