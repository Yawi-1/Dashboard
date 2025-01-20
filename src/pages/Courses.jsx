import React, { useState } from "react";
import { Layout } from "lucide-react";
import { courses } from "../assets/data";
import { Edit, Info, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
const Courses = () => {
  const [courseData, setCourseData] = useState(courses);
  const handleDelete = (id) => {
    setCourseData(() => {
      return courseData.filter((course) => course.id !== id); 
    });
    alert("Delete");
  };
  return (
    <div className="p-6">
      <div className="flex items-center mb-6">
        <Layout className="w-6 h-6 mr-2" />
        <h1 className="text-2xl font-bold">Courses</h1>
      </div>
      <button className="float-right mb-4 px-4 py-2 rounded-full bg-blue-600 text-white font-semibold">
        Add New Course
      </button>
      {courseData.length > 0 ? (
        <table className="w-full">
          <thead>
            <tr className="bg-gray-600 text-white">
              <th className="border border-gray-200 p-4">S.No</th>
              <th className="border border-gray-200 p-4">Title</th>
              <th className="border border-gray-200 p-4">Description</th>
              <th className="border border-gray-200 p-4">Price</th>
              <th className="border border-gray-200 p-4">Info</th>
              <th className="border border-gray-200 p-4">Edit</th>
              <th className="border border-gray-200 p-4">Delete</th>
            </tr>
          </thead>
          <tbody>
            {courseData.map((item, index) => {
              return (
                <tr
                  key={item.id}
                  className="hover:bg-blue-500 hover:text-white hover:border-blue-400"
                >
                  <td className="border border-gray-200 p-4">{index + 1}.</td>
                  <td className="border border-gray-200 p-4 font-semibold">
                    {item.title}
                  </td>
                  <td className="border border-gray-200 p-4 ">
                    {item.description}
                  </td>
                  <td className="border border-gray-200 p-4 ">${item.price}</td>
                  <td className="border border-gray-200 p-4 text-blue-700 cursor-pointer hover:text-white">
                    <Link to={`/courses/${item.id}`}>
                      <Info />
                    </Link>
                  </td>
                  <td className="border border-gray-200 p-4 text-yellow-500 cursor-pointer hover:text-yellow-600">
                    <Edit />
                  </td>
                  <td className="border border-gray-200 p-4 text-red-600 cursor-pointer hover:text-red-400">
                    <Trash2 onClick={() => handleDelete(item.id)} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div
          className="text-center text-2xl font-bold text-gray-600 mt-6
        "
        >
          No Courses Found
        </div>
      )}
    </div>
  );
};

export default Courses;
