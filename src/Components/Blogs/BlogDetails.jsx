import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {

    const loader = useLoaderData()
    return (
        <div>
hello        
{loader.name}    
        </div>
    );
};

export default BlogDetails;