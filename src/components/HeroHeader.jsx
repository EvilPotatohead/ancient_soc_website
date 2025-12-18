const HeroHeader = ({children}) => {
    return (
        <section className="
                relative
                min-h-[70vh]
                bg-[url('src/assets/school_of_athens.png')]
                bg-cover bg-center
                flex justify-center
                p-6
                text-black
        ">
            {children}
        </section>
    )
}

export default HeroHeader;