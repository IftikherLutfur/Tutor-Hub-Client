import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { TiDelete } from "react-icons/ti";

const BlogCollection = () => {

      const [blogs, setBlogs] = useState([])

    useEffect(()=>{
         axios.get('http://localhost:5000/getBlogs')
             .then(res=>{
                setBlogs(res.data)
             })
      },[])

     

      const handleDelete =async (blog) =>{
       console.log(blog._id);

       try {
        const res = await axios.delete(`http://localhost:5000/deleteBlog/${blog._id}`)
        if (res.data.deletedCount>0) {
            toast.success("Deleted Successfully")
            setBlogs((prevBlogs) =>
                prevBlogs.filter((s) => s._id !== blog._id)
            );
        }
        else{
            console.log("Error");
            
        }
       } catch (error) {
        console.error(error, "Error");
        
       }
       

      }

    return (
        <div>
                   Blogs Collection
                   <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                       <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                           <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                               <tr>
                                   <th scope="col" className="px-6 py-3">
                                       blog Name
                                   </th>
                                   <th scope="col" className="px-6 py-3">
                                       Email
                                   </th>
                                   <th scope="col" className="px-6 py-3">
                                       Date
                                   </th>
                                   <th scope="col" className="px-6 py-3">
                                       Action
                                   </th>
                               </tr>
                           </thead>
                           <tbody>
                               {blogs.map(blog =>
       
                                   <tr key={blog._id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                       <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                           {blog.name}
                                       </th>
                                       <td className="px-6 py-4">
                                           iftikherlutfur@gmail.com
                                       </td>
                                       <td className="px-6 py-4">
                                           {blog.publishedDate}
                                       </td>
       
       
                                     
                                       <td className="px-6 py-4 text-2xl text-red-700">
                                           <button onClick={() => handleDelete(blog)}><TiDelete /></button>
                                           <Toaster
                                position="top-center"
                                reverseOrder={false}
                            />
                                       </td>
                                   </tr>
       
                               )
       
       
                               }
       
                           </tbody>
                       </table>
                   </div>
       
               </div>
    );
};

export default BlogCollection;