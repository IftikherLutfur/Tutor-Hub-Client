
const Navbar = () => {
    return (
        <div>
            <div className="flex justify-between px-5 bg-opacity-10 bg-black py-5">
                <div>
                    <h1 className="text-2xl font-bold">Tutor <span className="text-pink-600">Hub</span></h1>
                </div>
                <div>
                    <ul className="flex gap-5">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;