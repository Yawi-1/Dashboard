import React from "react";
import {X} from 'lucide-react'
const FormModal = ({setIsEdit}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/60 z-50">
      <div className="bg-white rounded-lg shadow-lg w-1/3 p-6 relative">
        {/* Modal Header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center border-b pb-4">
          Update Form
        </h1>
      <X onClick={()=>setIsEdit(false)} size={24} className="absolute right-2 cursor-pointer  top-2 "/>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter title"
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Enter description"
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="text-center">
            <input
              type="submit"
              value="Update"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
