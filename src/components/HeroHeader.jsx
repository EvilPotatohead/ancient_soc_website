import school_of_athens from '../assets/school_of_athens.png';

const HeroHeader = ({children}) => {
    return (
        <section
            style={{ backgroundImage: `url(${school_of_athens})` }}
            className="
                relative
                bg-cover bg-center
                flex justify-center
                p-6
                text-black
        ">  
            <div className="absolute inset-0 bg-white/50"/>
            <div className='z-10 flex flex-col items-center justify-between min-w-[100vw]'>
                {children}
            </div>
        </section>
    )
}

export default HeroHeader;