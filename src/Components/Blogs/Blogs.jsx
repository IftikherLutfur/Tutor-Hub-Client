import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";


const Blogs = () => {

    const [blogs, setBlogs] = useState([])
    const [showAll, setShowAll] = useState(false);

    useEffect(()=>{
     axios.get('https://tutor-hub-server.vercel.app/getBlogs')
     .then(res=>{
        setBlogs(res.data)
     })
    },[])

    const toggleShow = () => {
        setShowAll((prevState) => !prevState);
    };

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                    From the blog
                </h1>

                <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
                    {(showAll ? blogs : blogs.slice(0, 2)).map((blog, index) => (
                        <div className="lg:flex" key={index}>
                            <img
                                className="object-cover w-full h-56 rounded-lg lg:w-64"
                                src={blog.image}
                                alt=""
                            />

                            <div className="flex flex-col justify-between py-6 lg:mx-6">
                                <a
                                    href="#"
                                    className="text-xl font-semibold text-gray-800 hover:underline dark:text-white"
                                >
                                    <NavLink to={`/getBlogs/${blog._id}`} >{blog.name}</NavLink>
                                </a>

                                <span className="text-sm text-gray-500 dark:text-gray-300">
                                    On: {blog.publishedDate} | {blog.time}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-8">
                    <button
                        onClick={toggleShow}
                        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300"
                    >
                        {showAll ? "Show Less" : "See More"}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Blogs;
