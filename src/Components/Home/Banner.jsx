
const Banner = () => {
    return (
        <div className="bg-zinc-900 text-white px-20 py-36">
            <div className="flex gap-20">
                <div>
                <h1 className="text-6xl">
                Welcome to the <br />
                <span className="text-6xl">Tutor Hub</span>
            </h1>  
                </div>
                <div>
                    <ul className="text-3xl">
                        <li>struggling with  homework?</li>
                        <li>need someone to explain?</li>
                        <li>want to improve your grades?</li>
                        <li>need some help with GCSEs?</li>
                        <li>need help with revision ?</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Banner;