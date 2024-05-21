import { NavLink } from "react-router-dom";
import "./Header.css"


const Header = () => {
    return (
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/categories">Categories</NavLink>
                <NavLink to="/random-meals">Random Meals</NavLink>
            </nav>
        </header>
    );
};

export default Header;