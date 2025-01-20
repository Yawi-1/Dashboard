import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../assets/data';
import { MoveLeft } from 'lucide-react';

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((item) => item.id === id);

  if (!course) {
    return (
      <div className="p-6 flex justify-center items-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500 mb-4">Course not found</h1>
          <Link
            to="/courses"
            className="text-blue-600 underline hover:text-blue-800 transition"
          >
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full overflow-hidden">
        <Link
          className="flex items-center text-blue-500 hover:underline p-4"
          to="/courses"
        >
          <MoveLeft className="mr-2" />
          Back to Courses
        </Link>
        <div className="flex flex-col md:flex-row">
          <img
             src={`https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80`}
            alt={course.title}
            className="md:w-1/2 w-full h-64 object-cover"
          />
          <div className="p-6 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-4 text-gray-800">{course.title}</h1>
              <p className="text-gray-700 text-lg mb-4">{course.description}</p>
              <span className="text-xl font-semibold text-blue-600">
                Price: ${course.price}
              </span>
            </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Edit
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
