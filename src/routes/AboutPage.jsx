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
                    At the Ancient Languages and Culture Society UNSW, we host a range of events focused on exploring all facets of ancient cultures around the world. We aim to learn the basics of classical languages such as Latin, and discover historical aspects such as Ancient Greek architectural styles. So far, we have covered Rome, Ancient Greece, Persia, and we welcome any suggestions for any future cultures to explore.
                </p>
                <h1>
                    Join us today on our various channels
                </h1>
                <div className="button-container grid grid-cols-2 md:grid-cols-5 auto-rows pb-6 px-4 gap-4">
                    <a href="https://campus.hellorubric.com/?tab=memberships&s=12431" className="button h-full"
                        target="_blank"
                        rel="noopener noreferrer">Rubric</a>
                    <a href="https://www.instagram.com/ancientsoc.unsw?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="button h-full"
                        target="_blank"
                        rel="noopener noreferrer">Instagram account</a>
                    <a href="https://l.instagram.com/?u=https%3A%2F%2Fig.me%2Fj%2FAbYJELZWJr8aX9IC%2F%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnYPPOLycrJftB6AX7bNOJN36B2KLIXZyelQO9-uhsDjOKIa-j1glrICCl2KA_aem_ZEKICV5G5yMzXrH_8U0Jmg&e=AT1AXyfyfuZ8PoWYdMlJNQUVjJmV-OKQrvRNogdjPa2S-eP5cqM0io5zKu1Q2jJETz6PIWuZuOfmz60OmCqw2MWarC4LL8Y7yd21d_b0Ww"
                        className="button h-full"
                        target="_blank"
                        rel="noopener noreferrer">Instagram group chat</a>
                    <a href="https://www.facebook.com/profile.php?id=61572183574744" className="button h-full"
                        target="_blank"
                        rel="noopener noreferrer">Facebook</a>
                    <a href="" className="button h-full"
                        target="_blank"
                        rel="noopener noreferrer">Clash Royale clan</a>
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