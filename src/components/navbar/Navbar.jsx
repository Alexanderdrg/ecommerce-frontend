import Logo from "../../assets/Logo.png"
import {Link} from "react-router-dom";
import NavLinks from "./NavLinks";
import Button from "../buttons/Main";
import {IoClose, IoMenu} from "react-icons/io5";
import {useState} from "react";
export default function Navbar(){
    const [open, setOpen] = useState(false)
    
    return (
        <nav className="bg-primary">
            <div className="flex items-center font-medium justify-around">
                <div className="z-50 p-5 md:w-auto w-full flex justify-between">
                    <img src={Logo} alt="logo" className="md:cursor-pointer h-9"/>
                    <div className="text-3xl text-secondary md:hidden" onClick={()=>setOpen(!open)}>
                        {open ? <IoClose/> : <IoMenu/>}
                    </div>
                </div>
                <ul className="md:flex hidden uppercase items-center gap-8">
                    <li>
                        <Link to="/" className="py-7 px-3 inline-block text-secondary">
                            Inicio
                        </Link>
                    </li>
                    <NavLinks/>
                </ul>
                <div className="md:block hidden">
                    <Button></Button>
                </div>
                {/*Mobile Nav*/}
                <ul className={`md:hidden bg-primary absolute w-full h-full bottom-0 py-24 pl-4
                duration-500 ${open ? "left-0" : "left-[-100%]"}`}>
                    <li>
                        <Link to="/" className="py-7 px-3 inline-block text-secondary">
                            Home
                        </Link>
                    </li>
                    <NavLinks/>
                    <div className="py-5">
                        <Button></Button>
                    </div>
                </ul>
            </div>
        </nav>
    )
}