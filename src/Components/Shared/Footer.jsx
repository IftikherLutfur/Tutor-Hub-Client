
const Footer = () => {
    return (
        <div className="bg-[#1D1D1D] text-white">

      <div className="lg:flex justify-evenly space-y-4 gap-10 mx-16  py-7">

        <div className="flex-1">
            <h1 className="text-5xl font-semibold">Tutor <span className="text-pink-500">Hub</span></h1>
            <p>Tutor Hub is an online platform that connects students with qualified tutors for personalized learning sessions across a wide range of subjects. It offers live one-on-one tutoring, group sessions, and study materials.</p>
        </div>
        
        <div className="flex-1">
            <p className="text-xl">Sign Up For Our Newsletter!</p>
            <p className="mb-3">Get notified about updates and be the first to get early access to new Podcast episodes.</p>
            <input type="text" className="py-2 hover:none px-6 text-black lg:w-80  rounded-l-lg" placeholder="Your email address" />
            <button className="bg-zinc-800 px-4 rounded-r-lg lg:w-40 py-2 text-white">Subscribe</button>
        </div>

        </div> 

        <div className="bg-[#5e37ad] py-3">
        <p className="text-center text-white">© 2024 | Tutor Hub</p>
        <p className="text-center">Develop by Iftikher Lutfur Abdullah</p>
        </div>

        </div>
    );
};

export default Footer;