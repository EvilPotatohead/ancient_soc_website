import HeroHeader from "../components/HeroHeader";
import { HashLink } from 'react-router-hash-link';

const NotFoundPage = () => {
    
    return (
        <div className="font-main overflow-hidden">
            <div className="min-h-16" />
            <HeroHeader>
                <div className='text-4xl p-8'>
                    Page not found
                </div>
            </HeroHeader>
            <div className='flex flex-col justify-center items-center p-6'>
                <div className="p-4">
                    Romani ite domus
                </div>
                
                <HashLink to='/#' className="font-main whitespace-nowrap button">
                    Click here to go home...
                </HashLink>
            </div>
        </div>
    )
}

export default NotFoundPage;