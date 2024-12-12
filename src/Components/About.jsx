import { HyperTextDemo } from "./magicui-animation/HyperTextDemo";

const aboutItems = [
    {
      label: 'Project done',
      number: 20
    },
    {
      label: 'Year of experience',
      number: 1
    }
];

const About = () => {
  return (
    <section id='about' className='section'>
      <div className='container'>
        <div className='bg-zinc-800/50 p-7 rounded-2xl md:p-12'>
            <p className='text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]'>
            Hello & မင်္ဂလာပါ 🇲🇲 ! I&apos;m Aung Nanda Oo, a passionate front-end developer and aspiring software engineer studying Computer Science at City College of San Francisco. My journey into tech started with curiosity and self-learning since IGCSE O-level, transforming challenges into a love for coding. I specialize in creating intuitive, visually engaging user interfaces using React, HTML, CSS, and JavaScript. I enjoy building scalable, reusable components that bring ideas to life, focusing on real-world applications that make an impact.
            </p>

            <div className='flex flex-wrap items-center gap-4'>
                {
                    aboutItems.map(({label, number},key)=>(
                        <div key={key}>
                            <div className="flex items-center md:mb-2">
                                {number == 1 ? 
                                <div className='flex gap-1 items-center'> 
                                    <span className="text-sky-400 font-semibold md:text-3xl">{`<`}</span>
                                    <span className="text-2xl font-semibold md:text-4xl"> <HyperTextDemo number={number}/></span> 
                                </div>: 
                                <>
                                    <span className="text-2xl font-semibold md:text-4xl"><HyperTextDemo number={number}/></span>
                                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                </>
                                }
                            </div>
                            <p className='text-sm text-zinc-400'>{label}</p>
                        </div>
                    ))
                }
                <img src="/images/logo.svg" alt="Logo" width={30} height={30} className='ml-auto md:w-[40px] md:h-[40px]'/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
