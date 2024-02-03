import { navLinksData } from "../../data/navLinksData"
import NavItem from "./NavItem"

const Navbar = () => {
    
    return (
        <div id="navbar" className="bg-white w-full fixed top-0 flex items-center justify-between py-2 px-28 shadow-sm">
            <div className="flex items-center">
                <img className="w-12 h-12" src="profile-pic.png" alt="" />
                <img className="w-28 ml-3" src="logo.png" alt="" />
            </div>
            <ul className="flex space-x-16">
                {navLinksData.map(({name, path, icon}, id) => (
                    <NavItem key={id} name={name} path={path} icon={icon} />
                ))}
            </ul>
        </div>
    )
}

export default Navbar
