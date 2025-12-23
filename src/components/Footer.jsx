import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    const scrollToTop = () => {window.scrollTo(0, 0)};
    return (
        <div className="bg-contrast text-white font-main 
            w-full p-4 
            flex flex-col md:flex-row justify-between items-center"
        >
            <div className='hidden md:flex footer-col'>
                <div className='font-bold'>
                    Pages
                </div>
                <button
                    className="font-main px-4 py-2 whitespace-nowrap cursor-pointer"
                    onClick={() => {navigate('/about'); scrollToTop()}}
                >
                    About Us
                </button>
                <button
                    className="font-main px-4 py-2 whitespace-nowrap cursor-pointer"
                    onClick={() => {navigate('/events'); scrollToTop()}}
                >
                    Events
                </button>
                <button
                    className="font-main px-4 py-2 whitespace-nowrap cursor-pointer"
                    onClick={() => {navigate('/resources'); scrollToTop()}}
                >
                    Resources
                </button>
            </div>

            <div className='footer-col'>
                <img 
                    src="src/assets/ancsoc_logo.png" 
                    alt="AncientSoc UNSW logo"
                    className='w-24 p-2' 
                />
                <div className='font-bold text-lg'>
                    UNSW Ancient Languages and Culture Society
                </div>
                <div>
                    ancientsoc.unsw@gmail.com
                </div>

            </div>

            <div className='footer-col'>
                <div className='font-bold'>
                    Contact us
                </div>
                <a 
                    href="https://www.instagram.com/ancientsoc.unsw?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-main px-4 py-2 whitespace-nowrap"
                >
                    Instagram
                </a>
                <a 
                    href="https://www.facebook.com/profile.php?id=61572183574744"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-main px-4 py-2 whitespace-nowrap"
                >
                    Facebook
                </a>
                <a 
                    href="mailto:ancientsoc.unsw@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-main px-4 py-2 whitespace-nowrap"
                >
                    Email
                </a>
            </div>
            
        </div>
    )
}

export default Footer;