import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Services from './pages/Services';
import Blogs from './pages/Blogs';
import Courses from './pages/Courses';
import Events from './pages/Events';
import Home from './pages/Home';
import BlogDetail from './components/BlogDetail';
import CourseDetail from './components/CourseDetail';
import NotFound from './pages/NotFound';
import BlogForm from './components/BlogForm';

function App() {
  return (
      <div className="flex">
        <Sidebar />
        <main className="flex-1 ml-64 bg-gray-100 min-h-screen">
          <Routes>
            <Route path="/" element={<Navigate to='/home' replace/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/services" element={<Services />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogform" element={<BlogForm />} />

            <Route path="/blogs/:id" element={<BlogDetail />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetail />} />
            <Route path="/events" element={<Events />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
  );
}

export default App;