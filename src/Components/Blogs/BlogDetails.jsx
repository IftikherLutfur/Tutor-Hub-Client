import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {

    const loader = useLoaderData()
    return (
        <div className="pt-20">
            <h1 className="text-2xl font-semibold text-center">Blog Details</h1>
            <div className="lg:flex gap-6 border-2 m-4">
                {/* First div */}
                <div>
                    <img className="w-[600px] h-[400px] flex-1" src={loader?.image} alt="" />
                </div>
                {/* Second div */}
                <div className="flex-1 py-5 px-4">
                    <h1 className="text-xl font-semibold mb-1">{loader.name}</h1>
                    <h1 className="text-xl">Details: {loader.description}</h1>
                    <p>Date: <span className="underline font-semibold">{loader.publishedDate} | {loader.time}</span></p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;