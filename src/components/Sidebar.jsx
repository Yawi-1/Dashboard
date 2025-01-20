import React from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, BookOpen, Briefcase, Calendar, ChevronRight,Home } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Home', path: '/home' },
    { icon: Layout, label: 'Courses', path: '/courses' },
    { icon: BookOpen, label: 'Blogs', path: '/blogs' },
    { icon: Briefcase, label: 'Services', path: '/services' },
    { icon: Calendar, label: 'Events', path: '/events' },
  ];

  return (
    <div className="h-screen w-64 bg-gray-900 text-white fixed left-0 top-0">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
        <nav>
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`
                }
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 ml-auto" />
              </NavLink>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;