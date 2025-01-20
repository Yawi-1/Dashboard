import React, { useState } from "react";
import { Home as HomeIcon } from "lucide-react";
import { courses, blogs, services, events } from "../assets/data";

const Home = () => {
  const [hoveredCourse, setHoveredCourse] = useState(false);
  const [hoveredServices, setHoveredServices] = useState(false);
  const [hoveredBlogs, setHoveredBlogs] = useState(false);
  const [hoveredEvents, setHoveredEvents] = useState(false);

  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-8">
        <HomeIcon className="w-8 h-8" />
        <h1 className="text-3xl font-extrabold text-gray-800">Welcome Admin</h1>
      </div>

      <div className="flex justify-between gap-6 items-start">
        {/* Courses Card */}
        <div
          className="relative flex flex-col flex-1 p-6 bg-blue-500 text-white rounded-xl shadow-lg hover:scale-105 transition-all"
          onMouseEnter={() => setHoveredCourse(true)}
          onMouseLeave={() => setHoveredCourse(false)}
        >
          <h2 className="text-4xl font-bold mb-2">Courses....</h2>
          <span className="text-2xl font-bold text-black">Total Courses : {courses.length + 2}</span>
          {hoveredCourse && (
            <div className="absolute top-full left-0 mt-2 bg-white text-black p-4 rounded-lg shadow-md w-full z-10">
              {courses.map((item, idx) => (
                <ol className="font-semibold" key={idx}>
                  - {item.title}
                </ol>
              ))}
            </div>
          )}
        </div>

        {/* Services Card */}
        <div
          className="relative flex flex-col flex-1 p-6 bg-green-500 text-white rounded-xl shadow-lg hover:scale-105 transition-all"
          onMouseEnter={() => setHoveredServices(true)}
          onMouseLeave={() => setHoveredServices(false)}
        >
          <h2 className="text-4xl font-bold mb-2">Services....</h2>
          <span className="text-2xl font-bold text-black">Total Services : {services.length}</span>
          {hoveredServices && (
            <div className="absolute top-full left-0 mt-2 bg-white text-black p-4 rounded-lg shadow-md w-full z-10">
              {services.map((item, idx) => (
                <ol className="font-semibold" key={idx}>
                  - {item.title}
                </ol>
              ))}
            </div>
          )}
        </div>

        {/* Blogs Card */}
        <div
          className="relative flex flex-col flex-1 p-6 bg-purple-500 text-white rounded-xl shadow-lg hover:scale-105 transition-all"
          onMouseEnter={() => setHoveredBlogs(true)}
          onMouseLeave={() => setHoveredBlogs(false)}
        >
          <h2 className="text-4xl font-bold mb-2">Blogs....</h2>
          <span className="text-2xl font-bold text-black">Total Blogs : {blogs.length + 7}</span>
          {hoveredBlogs && (
            <div className="absolute top-full left-0 mt-2 bg-white text-black p-4 rounded-lg shadow-md w-full z-10">
              {blogs.map((item, idx) => (
                <ol className="font-semibold" key={idx}>
                  - {item.title}
                </ol>
              ))}
            </div>
          )}
        </div>

        {/* Events Card */}
        <div
          className="relative flex flex-col flex-1 p-6 bg-yellow-500 text-white rounded-xl shadow-lg hover:scale-105 transition-all"
          onMouseEnter={() => setHoveredEvents(true)}
          onMouseLeave={() => setHoveredEvents(false)}
        >
          <h2 className="text-4xl font-bold mb-2">Events....</h2>
          <span className="text-2xl font-bold text-black">
            Total Events: {events.length}
          </span>
          {hoveredEvents && (
            <div className="absolute top-full left-0 mt-2 bg-white text-black p-4 rounded-lg shadow-md w-full z-10">
              {events.map((item, idx) => (
                <ol className="font-semibold" key={idx}>
                  - {item.title}
                </ol>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
