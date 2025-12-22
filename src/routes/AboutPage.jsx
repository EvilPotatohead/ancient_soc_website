import HeroHeader from "../components/HeroHeader";

const AboutPage = () => {
    return (
        <div className="font-main overflow-hidden">
            <div className="min-h-16" />
            <HeroHeader>
                <div className='text-4xl p-8'>
                    About
                </div>
            </HeroHeader>
            <div className="flex flex-col justify-center items-center pb-6">
                <p className='w-[90vw] py-[0.5rem] px-[2rem] wrap-anywhere'>
                    YAP YAP YAP about how we are so cool and niche and interesting. Probably talk about various activities/languages/collabs
                </p>
                <h1>
                    Join us today on our various channels
                </h1>
                <div className="button-container grid grid-cols-2 md:grid-cols-5 auto-rows pb-6 px-4 gap-4">
                    <a href="" className="button h-full">Rubric</a>
                    <a href="" className="button h-full">Instagram account</a>
                    <a href="" className="button h-full">Instagram group chat</a>
                    <a href="" className="button h-full">Facebook</a>
                    <a href="" className="button h-full">Clash Royale clan</a>
                </div>
                <section className="border-[4px] border-primary w-[90vw] mx-auto rounded-xl">
                    <h1>Got questions or suggestions?</h1>
                    <p className="text-bold text-md pb-4 px-2">Email us at ancientsoc.unsw@gmail.com or get in touch with our social media accounts above.</p>
                </section>
            </div>
            
        </div>
    )
}

export default AboutPage