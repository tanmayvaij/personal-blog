const Navbar = () => {
    return (
        <div id="navbar" className="flex items-center justify-between py-2 px-28 shadow-sm">
            <img className="w-28" src="logo.png" alt="" />
            <ul className="flex space-x-4">
                <span></span>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
        </div>
    )
}

export default Navbar
