import React from 'react';
import { Calendar } from 'lucide-react';
import { events } from '../assets/data';
const Events = () => {
  return (
    <div className="p-6">
      <div className="flex items-center mb-6">
        <Calendar className="w-6 h-6 mr-2" />
        <h1 className="text-2xl font-bold">Events</h1>
      </div>
      <div className="grid gap-6">
        {events.map((item,idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold mb-2"> {item.title}</h3>
                <p className="text-gray-600 mb-2">
                  {item.description}. 
                </p>
                <div className="flex items-center text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{item.date}</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Edit
                </button>
                <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;