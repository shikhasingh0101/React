
import React from 'react';

const plans = [
  {
    name: 'Basic',
    price: '$9.99',
    features: [
      { name: 'Feature A', description: 'Basic support and feature set' },
      { name: 'Feature B', description: 'Access to standard updates' },
      { name: 'Feature C', description: 'Community support' },
    ],
  },
  {
    name: 'Pro',
    price: '$19.99',
    features: [
      { name: 'Feature A', description: 'Priority support and extended feature set' },
      { name: 'Feature B', description: 'Early access to updates and beta features' },
      { name: 'Feature C', description: 'Dedicated support and resources' },
      { name: 'Feature D', description: 'Enhanced security and performance' },
    ],
  },
  {
    name: 'Enterprise',
    price: 'Contact Us',
    features: [
      { name: 'Feature A', description: 'Custom support and advanced feature set' },
      { name: 'Feature B', description: 'Tailored solutions and dedicated account manager' },
      { name: 'Feature C', description: 'Priority access to new features and updates' },
      { name: 'Feature E', description: 'Enterprise-level security and compliance' },
    ],
  },
];

const Pricing = () => {
  return (
    <div id="pricing" className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-6 rounded shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-4">{plan.price}</p>
              <ul className="mb-6 text-left">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="mb-2">
                    <strong>{feature.name}:</strong> {feature.description}
                  </li>
                ))}
              </ul>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
