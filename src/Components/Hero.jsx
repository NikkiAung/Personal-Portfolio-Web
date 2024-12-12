import BoxRevealDemo from "@/components/BoxRevealDemo"

const Hero = () => {
  return (
    <section id='home' className='pt-28 lg:pt-36'>
        <div className='container items-center lg:grid lg:grid-cols-2 lg:gap-10'>
            <div>
                <BoxRevealDemo />
            </div>

            <div className="hidden lg:block">
                {/* bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65%  */}
                <figure className="w-full max-w-[300px] ml-auto aspect-square overflow-hidden">
                    <img 
                        src="/images/hero-banner.jpg" 
                        width={800} 
                        height={800} 
                        alt="Aung Nanda Oo" 
                        className='rounded-full w-full h-full object-cover'
                    />
                </figure>
            </div>
        </div>
    </section>
  )
}

export default Hero
