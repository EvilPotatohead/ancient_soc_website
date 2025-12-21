import HeroHeader from "../components/HeroHeader";
import { HashLink } from 'react-router-hash-link';
import { useState } from "react";

import resources from "../data/resources.json";

const ResourcesPage = () => {
    const [filter, setFilter] = useState('all');
    const filters = ['latin', 'greek', 'persian'];

    const items = resources
        .filter(i => filter === 'all' || i.filter === filter)
        .map(i => (
            <div className='flex items-center justify-center bg-primary text-white w-full h-full rounded-lg p-4'>
                <a
                    key={i.id}
                    href={i.url}
                    target="_blank"
                >
                    {i.title}
                </a>
            </div>
            
    ));
    console.log(items)

    return (
        <div className="font-main overflow-hidden">
            <div className="min-h-16" />
            <HeroHeader>
                <div className='text-4xl p-8'>
                    Resources
                </div>
            </HeroHeader>
            <div className="pt-6 flex justify-center">
                <div className='border-2 border-contrast w-fit rounded-lg flex flex-col md:flex-row'>
                    <button
                        data-filter={filter === 'all'} 
                        className="min-w-24 cursor-pointer data-[filter=true]:bg-primary data-[filter=true]:text-white" 
                        onClick={() => setFilter('all')}>
                        All
                    </button>
                    <button 
                        data-filter={filter === 'latin'} 
                        className="min-w-24 cursor-pointer data-[filter=true]:bg-primary data-[filter=true]:text-white"
                        onClick={() => setFilter('latin')}>
                        Latin
                    </button>
                    <button
                        data-filter={filter === 'greek'} 
                        className="min-w-24 cursor-pointer data-[filter=true]:bg-primary data-[filter=true]:text-white"
                        onClick={() => setFilter('greek')}>
                        Greek
                    </button>
                    <button
                        data-filter={filter === 'persian'} 
                        className="min-w-24 cursor-pointer data-[filter=true]:bg-primary data-[filter=true]:text-white"
                        onClick={() => setFilter('persian')}>
                        Old Persian
                    </button>
                </div>
            </div>
            <div className="flex justify-center items-center p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 col-span-2 auto-rows-[80%]
                    inset-shadow-sm/50 inset-shadow-primary 
                    h-[40vh] p-4 overflow-auto w-full rounded-xl"
                >
                    {items}
                </div>
            </div>

        </div>
    )
}

export default ResourcesPage;