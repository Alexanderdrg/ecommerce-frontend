import {IoCart, IoChevronForward, IoClose, IoMenu, IoSearch} from "react-icons/io5";
import {useEffect, useRef, useState} from "react";

function Sidebar() {
    const [open, setOpen] = useState(false)
    const [openCart, setOpenCart] = useState(false)
    const [firstMenuOpen, setFirstMenuOpen] = useState(false)
    const sidebarRef = useRef(null)

    useEffect(() => {
        function handleClickOutside(event) {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setOpen(!open)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    },)

    return (
        <>
            <div className="h-[10%]">
                <div className="flex justify-center items-center py-5">
                    {/*<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/1000px-Coca-Cola_logo.svg.png" className="w-24" alt="main-logo"></img>*/}
                    <div className="absolute right-0 top-7 px-4 text-gray-500" onClick={() => setOpenCart(!openCart)}>
                        <IoCart size={25}/></div>
                </div>
                <div
                    className={`absolute bottom-0 h-[100%] bg-gray-500 transition-all lg:w-[25%] ${open ? "w-[75%] z-40" : "w-0"}`}>
                    <div className={`w-[15%] py-5 px-4 ${open ? "absolute right-5" : ""}`}>
                        {open ? <IoClose className="lg:hidden" size={25} onClick={() => setOpen(!open)}/>
                            : <IoMenu className="lg:hidden text-gray-500" size={40} onClick={() => setOpen(!open)}/>}
                    </div>
                    <ul className={`absolute top-20 px-6 w-full ${open ? "" : "invisible lg:visible"}`}>
                        <li className="border-b border-slate-800 py-2 px-2"
                            onClick={() => setFirstMenuOpen(!firstMenuOpen)}>
                            <div className="grid grid-cols-9 items-center">
                                <div className="col-span-8">Item 1</div>
                                {firstMenuOpen ? <IoClose size={22}/> : <IoChevronForward size={22}/>}
                            </div>
                        </li>
                        {firstMenuOpen ?
                            <>
                                <li className="border-b border-gray-500 py-2 px-2">Item 1.2</li>
                                <li className="border-b border-gray-500 py-2 px-2">Item 1.3</li>
                            </>
                            : ""}
                        <li className="border-b border-slate-800 py-2 px-2 mt-3">Item 2</li>
                    </ul>
                </div>
            </div>
        {/*<div className={`absolute bottom-0 w-full rounded-md bg-gray-500 transition-all ${openCart ? "h-[50%]" : "h-0 w-0"}`}></div>*/}
        </>
    )
}

export default Sidebar