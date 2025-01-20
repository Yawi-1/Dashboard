import React, { useState } from 'react';
import { BookOpen,Edit,Info, Trash2 } from 'lucide-react';
import { blogs } from '../assets/data';
import { Link } from 'react-router-dom';
import FormModal from '../components/FormModal';


const Blogs = () => {
  const [isEdit,setIsEdit] = useState(false);

  return (
    <div className="p-6">
      {isEdit && <FormModal setIsEdit={setIsEdit}/>}
      <div className="flex items-center mb-6">
        <BookOpen className="w-6 h-6 mr-2" />
        <h1 className="text-2xl font-bold">Blogs</h1>
      </div>
      <Link to={'/blogform'} className='float-right mb-4 px-4 py-2 rounded-full bg-blue-600 text-white font-semibold'>Add New Blog</Link>

      <table className='w-full'>
        <thead>
          <tr className='bg-gray-600 text-white round-full'>
            <th className="border border-gray-200 p-4">S.No</th>
            <th className="border border-gray-200 p-4">Title</th>
            <th className="border border-gray-200 p-4">Description</th>
            <th className="border border-gray-200 p-4">Info</th>
            <th className="border border-gray-200 p-4">Edit</th>
            <th className="border border-gray-200 p-4">Delete</th>

          </tr>
        </thead>
        <tbody>
          {
            blogs.map((item,index)=>{
              return (
                <tr key = {index} className='hover:bg-blue-500 hover:text-white hover:border-blue-400'>
                  <td className="border border-gray-200 p-4">{index+1}.</td>
                  <td className="border border-gray-200 p-4 font-semibold">{item.title}</td>
                  <td className="border border-gray-200 p-4 ">{item.description}</td>
                  <td className="border border-gray-200 p-4 text-blue-700 cursor-pointer hover:text-white">
                  <Link to={`/blogs/${item.id}`}><Info/></Link>  
                  </td>
                  <td className="border border-gray-200 p-4 text-yellow-500 cursor-pointer hover:text-yellow-600"><Edit onClick={()=>setIsEdit(true)}/></td>
                  <td className="border border-gray-200 p-4 text-red-600 cursor-pointer hover:text-red-400"><Trash2 onClick={()=>alert('Deleted Successfullyy.....')}/></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default Blogs;