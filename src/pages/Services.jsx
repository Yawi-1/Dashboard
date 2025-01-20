import React from 'react';
import { Settings } from 'lucide-react';

const Services = () => {
  return (
    <div className="p-6 ">
      <div className="flex items-center mb-6">
        <Settings className="w-6 h-6 mr-2" />
        <h1 className="text-2xl font-bold">Services</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">Service {item}</h3>
            <p className="text-gray-600">
              Description for service {item}. Add your service details here.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;