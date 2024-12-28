const ContactUs = () => {
    return (
        <div className="relative pt-20 pb-10">
            {/* Video Background */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                autoPlay
                muted
                loop
            >
                
                Your browser does not support the video tag.
            </video>

            {/* Content */}
            <div className="relative lg:flex justify-between items-center mx-10 gap-10">
                {/* Left Content */}
                <div className="flex-1 text-black">
                    <h1 className="text-4xl font-bold">Contact with us</h1>
                    <p className="text-xl font-semibold mt-2">
                        Talk with our support manager. Let's discuss something cool together.
                    </p>
                    <p className="text-xl font-semibold mt-2">supportTutorHub@gmail.com</p>
                    <p className="text-xl font-semibold mt-2">+8801966095405</p>
                </div>

                {/* Right Form */}
                <div className="flex-1 bg-zinc-700 bg-opacity-80 p-6 rounded-lg shadow-lg">
                    <form action="">
                        {/* Full Name Input */}
                        <div className="relative flex items-center mt-8">
                            <span className="absolute">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 mx-3 text-gray-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </span>
                            <input
                                type="text"
                                name="name"
                                className="block border-2 w-full py-3 text-black bg-white rounded-lg px-11"
                                placeholder="Full Name"
                                required
                            />
                        </div>

                        {/* Email Input */}
                        <div className="relative flex items-center mt-6">
                            <span className="absolute">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 mx-3 text-gray-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </span>
                            <input
                                type="email"
                                name="email"
                                className="block w-full py-3 bg-white border rounded-lg px-11 text-black"
                                required
                                placeholder="Your Email"
                            />
                        </div>

                        {/* Message Input */}
                        <div className="relative flex items-center mt-6">
                            <textarea
                                name="message"
                                className="border-2 p-3 w-full h-36 rounded-lg"
                                placeholder="Write here"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button className="bg-zinc-800 font-semibold text-white w-full py-2 mt-4 rounded-lg hover:bg-zinc-900">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
