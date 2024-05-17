import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "../Link/Link";
import { useState } from "react";


const Navbar = () => {

    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: "/home", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/contact", name: "Contact" },
        { id: 4, path: "/services", name: "Services" },
        { id: 5, path: "/profile", name: "Profile" }
      ];
      

    return (
        <nav className="bg-yellow-400 p-6 text-black">
            <button className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? <AiOutlineClose /> : <AiOutlineMenu />
                }
            </button>
            <ul className={`md:flex md:justify-center bg-yellow-400 text-black absolute md:static duration-100 px-6 rounded-lg ${open ? 'left-16 shadow-lg md:shadow-none' : '-left-60'}`}>
            {
                routes.map(route => <Link key={route.id} route={route}/>)
            }
            </ul>
        </nav>
    );
};

export default Navbar;