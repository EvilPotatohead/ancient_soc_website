import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import HeroHeader from '../components/HeroHeader';
import { Navigate, useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div className="font-main overflow-hidden"> 
            <div className="min-h-16" />
            <HeroHeader>
                <img src="src/assets/ancsoc_logo.png" alt="Ancient Languages and Culture Society UNSW" 
                    className='w-40'
                />
                <div className="button-container py-12">
                    <button className="button">About</button>
                    <HashLink className="button" smooth to="/#join-us">Join today</HashLink>
                </div>

                <div className="flex flex-row justify-center gap-16 p-2 min-w-[70vh]">
                    <a 
                        href="https://www.instagram.com/ancientsoc.unsw?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-main px-4 py-2 whitespace-nowrap"
                    >
                        <FaInstagram className='text-primary w-12 h-12 transition-shadow duration-300
                            hover:scale-110'/>
                    </a>
                    <a 
                        href="https://www.facebook.com/profile.php?id=61572183574744"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-main px-4 py-2 whitespace-nowrap"
                    >
                        <FaFacebook className='text-primary w-12 h-12 transition-shadow duration-300
                            hover:scale-110'/>
                    </a>
                </div>
            </HeroHeader>
            <div className='pb-8'>
                <h1>Welcome to Ancient Languages and Culture Society at UNSW</h1>
                <p className="px-12 md:px-24 lg:px-48">Percy Jackson stans and classical language fans unite! We talk about ancient languages and culture - the good, the bad, and the scandalous alike.</p>
                {/* <h2>If you would like to learn Classical Greek for the first time, you’re in the right place. If languages aren’t your thing, then come along to one of our sessions to learn more about Roman history.</h2> */}
            </div>
            
            <section className="bg-primary text-white w-[80vw] mx-auto rounded-xl">
                <h1 className="px-1">Weekly sessions are held at:</h1>
                <p className="text-bold text-lg pb-4 px-2">To be confirmed closer to Term 1 2026</p>
            </section>
            
            <section id="join-us" className="pt-6 pb-6 scroll-mt-16">
                <h1>Join us today</h1>
                <div className="button-container py-2">
                    <button className="button" 
                        onClick={() => window.open('https://www.instagram.com/ancientsoc.unsw?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank')}>
                            Instagram
                        </button>
                    <button className="button"
                        onClick={() => window.open('https://campus.hellorubric.com/?tab=memberships&s=12431', '_blank')}>
                        Rubric
                        </button>
                    <button className="button"
                        onClick={() => window.open('https://www.facebook.com/profile.php?id=61572183574744', '_blank')}>
                            Facebook
                        </button>
                </div>
            </section>

            <div className="pb-8">
                <h1>Learn more about the society</h1>
                <div className="button-container py-2">
                    <button className="button" 
                        onClick={() => navigate('/#')}>
                            Resources
                        </button>
                    <button className="button"
                        onClick={() => navigate('/#')}>
                            Events
                        </button>
                </div>
            </div>
            <div className="flex pb-8 justify-center">
                <iframe
                    title="Facebook Page"
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61572183574744&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId"
                    width="340"
                    height="500"
                    style={{ border: 'none', overflow: 'hidden' }}
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
            </div>
        </div>
        
    )
}
export default HomePage;