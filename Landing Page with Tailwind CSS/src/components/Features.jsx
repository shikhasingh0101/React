
import React from 'react';

const features = [
  { title: 'High Quality Fabric', description: 'Our clothes are made from the highest quality materials.' },
  { title: 'Trendy Designs', description: 'Stay in style with our latest fashion trends.' },
  { title: 'Affordable Prices', description: 'Get the best value for your money with our competitive pricing.' },
];

const Features = () => {
  return (
    <div id="features" className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
