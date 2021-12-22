import React from 'react';
import Logo from './Logo';
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

interface INavLink {
    desc: string,
    to: string
}
const NavLink:React.FC<INavLink> = (props) => {
    return(
        <div className="mx-2 px-10 py-4 bg-red-500 shadow-md transition duration-100 ease-in-out rounded-lg hover:bg-red-600 ">
            <Link to={props.to}> {props.desc} </Link>
        </div>
    )
}
const NavSearchBar:React.FC = () => (
    <div className="flex border-2 mx-2 rounded shadow-md">
        <input type="text" className="px-4 py-2 w-80 text-black" placeholder="Search for name or number"/>
        <button className="flex items-center justify-center px-4 border-l bg-red-500 hover:bg-red-600">
            <FontAwesomeIcon icon={faSearch} />
        </button>
    </div>
)
const Navbar = () => {
    return (
        <div className= "flex flex-row w-full h-28 bg-pokered justify-between text-white items-center">
            <Logo />
            <div className="flex flex-row justify-end w-auto">
                <NavLink desc="Home" to="/home"/>
                <NavLink desc="Advanced Search" to="/advanced-search"/>
                <NavLink desc="About" to="/about"/>
                <NavSearchBar />
            </div>
        </div>
    )
}
export default Navbar;
