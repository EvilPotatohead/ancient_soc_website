import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <div className="bg-contrast text-white font-main 
            fixed bottom-0 left-0 w-full p-4 
            flex flex-row justify-between items-center"
        >
            <div className='footer-col'>
                <div className='font-bold'>
                    Pages
                </div>
                <HashLink
                    tabIndex={-1}
                    onKeyDown={() => {}}
                    smooth
                    to='/#'
                    className="font-main px-4 py-2 whitespace-nowrap"
                > 
                    About
                </HashLink>
                <HashLink
                    tabIndex={-1}
                    onKeyDown={() => {}}
                    smooth
                    to='/#'
                    className="font-main px-4 py-2 whitespace-nowrap"
                > 
                    Resources
                </HashLink>
                <HashLink
                    tabIndex={-1}
                    onKeyDown={() => {}}
                    smooth
                    to='/#'
                    className="font-main px-4 py-2 whitespace-nowrap"
                > 
                    Events
                </HashLink>
            </div>

            <div className='footer-col'>
                <div className='font-bold'>
                    Contact us
                </div>
                <HashLink
                    tabIndex={-1}
                    onKeyDown={() => {}}
                    smooth
                    to='/#'
                    className="font-main px-4 py-2 whitespace-nowrap"
                > 
                    Instagram
                </HashLink>
                <HashLink
                    tabIndex={-1}
                    onKeyDown={() => {}}
                    smooth
                    to='/#'
                    className="font-main px-4 py-2 whitespace-nowrap"
                > 
                    Facebook
                </HashLink>
                <HashLink
                    tabIndex={-1}
                    onKeyDown={() => {}}
                    smooth
                    to='/#'
                    className="font-main px-4 py-2 whitespace-nowrap"
                > 
                    Email
                </HashLink>
            </div>
            
        </div>
    )
}

export default Footer;