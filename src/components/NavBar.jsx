import AncientSocLogo from "./AncientSocLogo"
import BurgerMenu from "./BurgerMenu";
import { useNavigate } from "react-router-dom"
import { useState } from "react";


const NavBar = () => {
    const navigate = useNavigate();
    const scrollToTop = () => {window.scrollTo(0, 0)};
    const pages = ['about', 'events', 'resources'];

    const titleCase = (string) => {
        return String(string).charAt(0).toUpperCase() + String(string).slice(1);
    };

    const buttons = pages.map(p => (
                    <button
                        className="font-main px-4 py-2 whitespace-nowrap cursor-pointer"
                        onClick={() => {navigate("/" + p); scrollToTop()}}
                    >
                        {titleCase(p)}
                    </button>
                ))

    return (
        <nav className="fixed inset-x-0 top-0 h-16 z-50 bg-white flex flex-row items-center justify-between shadow-2xl w-full">
            <div className="font-main h-16 flex"> 
                <AncientSocLogo className="h-full overflow-hidden w-auto max-w-full"/>
            </div>
            <div className="md:hidden">
                <BurgerMenu items={pages}/>
            </div>
            
            <div className="hidden md:flex flex-row justify-center items-center">
                {buttons}
            </div>
            
        </nav>
        
    )
}


export default NavBar