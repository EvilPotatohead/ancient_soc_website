import AncientSocLogo from "./AncientSocLogo"
import { HashLink } from 'react-router-hash-link';


const NavBar = () => {
    // const scrollWithOffset = (el) => {
    //     const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    //     const yOffset = -130; 
    //     window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    // }
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white flex flex-row items-center justify-between">
            <div className="font-main h-16 flex"> 
                <AncientSocLogo className="h-full"/>
            </div>
            <div className="flex flex-row justify-center items-center min-w-max">
                <HashLink
                    tabIndex={-1}
                    onKeyDown={() => {}}
                    smooth
                    to='/#'
                    className="font-main px-4 py-2 whitespace-nowrap"
                >
                    About Us
                </HashLink>
                <HashLink
                    tabIndex={-1}
                    onKeyDown={() => {}}
                    smooth
                    to='/#'
                    className="font-main px-4 py-2"
                >
                    Events
                </HashLink>
                <HashLink
                    tabIndex={-1}
                    onKeyDown={() => {}}
                    smooth
                    to='/#'
                    className="font-main px-4 py-2"
                >
                    Resources
                </HashLink>
            </div>
            
        </nav>
        
    )
}


export default NavBar