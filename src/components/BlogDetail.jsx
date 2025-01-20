import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogs } from "../assets/data";
import { MoveLeft } from "lucide-react";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((item) => item.id === parseInt(id));

  if (!blog) {
    return <div className="p-6 text-center text-red-500 text-2xl">Blog not found!</div>;
  }

  return (
    <div className="p-6 flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
        <Link
          className="flex items-center text-blue-500 hover:underline mb-4"
          to="/blogs"
        >
          <MoveLeft className="mr-2" />
          Back to Blogs
        </Link>
        <h1 className="text-3xl font-bold mb-4 text-gray-800">{blog.title}</h1>
        <p className="text-gray-700 text-lg">{blog.description}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
