const HeroHeader = ({children}) => {
    return (
        <section className="
                relative
                bg-[url('src/assets/school_of_athens.png')]
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