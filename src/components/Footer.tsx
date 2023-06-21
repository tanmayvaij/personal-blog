import { Link } from "react-router-dom"

const currentYear = new Date().getFullYear()

const Footer = () => {
    return (
        <div id="footer" className="mt-24 border flex items-center justify-center flex-col p-4">
            <img className="w-28" src="logo.png" alt="" />
            <div className="flex space-x-10 p-5">
                <Link to="">Home</Link>
                <Link to="">About Us</Link>
                <Link to="">Contact</Link>
                <Link to="">Privacy</Link>
            </div>
            <p className="p-2 text-gray-400 text-sm">© {currentYear} Tanmay Vaij. All rights reserved</p>
        </div>
    )
}

export default Footer
