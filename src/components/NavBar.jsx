import AncientSocLogo from "./AncientSocLogo"
import { HashLink } from 'react-router-hash-link';


const NavBar = () => {
    // const scrollWithOffset = (el) => {
    //     const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    //     const yOffset = -130; 
    //     window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    // }
    return (
        <nav className="fixed inset-x-0 top-0 h-16 z-50 bg-white flex flex-row items-center justify-between shadow-2xl w-full">
            <div className="font-main h-16 flex"> 
                <AncientSocLogo className="h-full overflow-hidden w-auto max-w-full"/>
            </div>
            <div className="hidden md:flex flex-row justify-center items-center">
                <HashLink
                    tabIndex={-1}
                    onKeyDown={() => {}}
                    smooth
                    to='/about'
                    className="font-main px-4 py-2 whitespace-nowrap"
                >
                    About Us
                </HashLink>
                <HashLink
                    tabIndex={-1}
                    onKeyDown={() => {}}
                    smooth
                    to='/events'
                    className="font-main px-4 py-2"
                >
                    Events
                </HashLink>
                <HashLink
                    tabIndex={-1}
                    onKeyDown={() => {}}
                    smooth
                    to='/resources'
                    className="font-main px-4 py-2"
                >
                    Resources
                </HashLink>
            </div>
            
        </nav>
        
    )
}


export default NavBar