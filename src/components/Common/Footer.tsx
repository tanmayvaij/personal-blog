import { Link, NavLink } from "react-router-dom"
import { navLinksData } from "../../data/navLinksData"

const currentYear = new Date().getFullYear()

const Footer = () => {
    return (
        <div id="footer" className="mt-24 border flex items-center justify-center flex-col p-4 space-y-3">
            <img className="w-28" src="logo.png" alt="" />
            <div className="flex space-x-10 p-5">
                {navLinksData.map(({ name, path }, id) => (
                    <NavLink className="font-medium" to={path} key={id}>{name}</NavLink>
                ))}
            </div>
            <p className="p-2 text-gray-400 text-sm">© {currentYear} Tanmay Vaij. All rights reserved</p>
        </div>
    )
}

export default Footer
