import HeroHeader from "../components/HeroHeader";

const EventsPage = () => {
    return (
        <div className="font-main overflow-hidden">
            <div className="min-h-16" />
            <HeroHeader>
                <div className='text-4xl p-8'>
                    Events
                </div>
            </HeroHeader>
            <div className="pb-8">
                <h1>Weekly language and culture workshops</h1>
                <p>BLAH BLAH BLAH We meet every week and play Clash Royale</p>
            </div>
            <section className="bg-primary text-white w-[80vw] mx-auto rounded-xl">
                <h1 className="px-1">This term, weekly sessions are held at:</h1>
                <p className="text-bold text-lg pb-4 px-2">To be confirmed closer to Term 1 2026</p>
            </section>

            <div className="flex flex-col py-6 justify-center items-center">
                <h1>Check out recent events on our Facebook</h1>
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

export default EventsPage