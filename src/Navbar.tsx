import React from 'react';
import Logo from './Logo';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

interface INavLink {
    desc: string
}
const NavLink:React.FC<INavLink> = (props) => {
    return(
    <a href="" className="transition duration-100 ease-in-out hover:"> {props.desc}</a>
    )
}
const Navbar = () => {
    return (
        <div className= "flex-row w-full h-10 bg-pokered text-white items-center">
            <Logo />
            <div className="justify-items-end">
                
            </div>
        </div>
    )
}
