import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {

    const loader = useLoaderData();
    console.log(loader);

    return (
        <div className="pt-20 my-7">
            <div className="flex gap-6 border-2 m-4">
                  {/* First div */}
                <div>
                    <img className="w-[600px] h-[400px] flex-1" src={loader?.image} alt="" />
                </div>
                {/* Second div */}
                <div className="flex-1 py-5">
                  <h1 className="text-xl font-semibold">{loader.courseName}</h1>
                  <h1 className="text-xl font-semibold">Duration:{loader.duration}</h1>
                  <h1 className="text-xl font-semibold">{loader.prerequisites}</h1>
                  <h1 className="text-xl font-semibold">{loader.targetAudience}</h1>
                  <h1 className="text-xl font-semibold">{loader.email}</h1>
                  <h1 className="text-xl font-semibold">{loader.number}</h1>
                  <h1 className="text-xl">Details: {loader.description}</h1>
                  <button className="bg-zinc-800 text-xl font-semibold text-white w-full mt-6 p-2 rounded-md">Enroll Now</button>
                  

                </div>
            </div>
        </div>
    );
};

export default CourseDetails;