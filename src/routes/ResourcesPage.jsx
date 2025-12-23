import HeroHeader from "../components/HeroHeader";
import { useState } from "react";

import resources from "../data/resources.json";

const ResourcesPage = () => {
    const [filter, setFilter] = useState('all');
    const [query, setQuery] = useState('');
    const filters = ['all', 'latin', 'greek', 'persian'];

    const searchResults = resources.filter(i =>
        i.title.toLowerCase().includes(query.toLowerCase())
    );

    // currently sorts by alphabetical order
    const items = searchResults
        .filter(i => filter === 'all' || i.filter === filter).sort((a, b) => a.title.localeCompare(b.title))
        .map(i => (
            <div className='flex items-center justify-center bg-primary text-white w-full h-full rounded-lg p-4 wrap-anywhere'>
                <a
                    key={i.id}
                    href={i.url}
                    target="_blank"
                >
                    {i.title}
                </a>
            </div>)
        );
    
    const titleCase = (string) => {
        return String(string).charAt(0).toUpperCase() + String(string).slice(1);
    };

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
                    {filters.map(i => (
                        <button
                            data-filter={filter === i} 
                            className="min-w-24 cursor-pointer data-[filter=true]:bg-primary data-[filter=true]:text-white" 
                            onClick={() => setFilter(i)}>
                            {titleCase(i)}
                        </button>
                    ))}

                </div>
            </div>
            <div className='flex justify-center items-center py-2'>
                <input
                    type="text"
                    placeholder="Search by title…"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="border rounded-lg px-3 py-2 w-[80vw]"
                />
            </div>
            
            <div className="flex justify-center items-center p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 col-span-2 auto-rows-[80%]
                    inset-shadow-sm/50 inset-shadow-primary 
                    h-[40vh] p-4 overflow-auto w-full rounded-xl"
                >
                    {items.length === 0 ? 
                        <div className='flex items-center justify-center bg-primary text-white w-full h-full rounded-lg p-4 wrap-anywhere'>
                            Nothing to see here...
                        </div>
                    : items}
                </div>
            </div>

        </div>
    )
}

export default ResourcesPage;