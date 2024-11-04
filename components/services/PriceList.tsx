import React from 'react';

const PriceList = () => {
    const priceData = [
        { title: "Basic Plan", price: "$10/month", features: ["Feature A", "Feature B", "Feature C"] },
        { title: "Standard Plan", price: "$20/month", features: ["Feature A", "Feature B", "Feature C", "Feature D"] },
        { title: "Standard Plan", price: "$20/month", features: ["Feature A", "Feature B", "Feature C", "Feature D"] },
        { title: "Standard Plan", price: "$20/month", features: ["Feature A", "Feature B", "Feature C", "Feature D"] },
        { title: "Standard Plan", price: "$20/month", features: ["Feature A", "Feature B", "Feature C", "Feature D"] },
        { title: "Premium Plan", price: "$30/month", features: ["Feature A", "Feature B", "Feature C", "Feature D", "Feature E"] }
    ];

    return (
        <div className=" flex items-center justify-center p-10 pt-32">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
                {priceData.map((plan, index) => (
                    <div key={index} className="bg-gray-800 text-white p-6 rounded-lg shadow-lg relative overflow-hidden">
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
                        <p className="text-gray-400 text-sm">
                            Get access to all the essential features for your needs.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PriceList;
