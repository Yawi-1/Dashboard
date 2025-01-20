import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the default style for Quill

function BlogForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  
  // Handle the title change
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  // Handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Blog Title: ${title}\nBlog Content: ${content}`);
    // Here, you would typically handle the submission to a backend
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-semibold text-center mb-8">Create a New Blog</h1>
      
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-medium text-gray-700">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={handleTitleChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter blog title"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700">Description</label>
          <ReactQuill
            value={content}
            onChange={setContent}
            theme="snow"
            className="mt-2"
            placeholder="Write your blog content here..."
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition"
          >
            Publish Blog
          </button>
        </div>
      </form>
    </div>
  );
}

export default BlogForm;
