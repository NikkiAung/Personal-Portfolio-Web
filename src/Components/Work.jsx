import ProjectCard from "./ProjectCard";
const works = [
    {
      imgSrc: '/images/project-1.png',
      title: 'BurmeseEduGuide website',
      tags: ['GEMINI-API', 'RAG', 'PYTHON','STREAMLIT','FIREBASE'],
      projectLink: 'https://github.com/NikkiAung/Building-LLM-App'
    },
    {
      imgSrc: '/images/project-2.png',
      title: 'Diet Plan Design',
      tags: ['FIGMA', 'UI/UX'],
      projectLink: 'https://www.figma.com/proto/F1N3gjhG7RIeVlg2ctZNBq/BUD-Nov?page-id=49%3A3&node-id=49-4&node-type=frame&viewport=1062%2C-234%2C0.13&t=xGJ3wk5vp3265U5J-1&scaling=scale-down&content-scaling=fixed'
    },
    {
      imgSrc: '/images/project-3.jpg',
      title: 'Full Stack Recipe Website',
      tags: ['Mongo.DB','Express.js','React','Node.js'],
      projectLink: 'https://github.com/NikkiAung/MERN-Stack-Recipe-Project'
    },
    {
      imgSrc: '/images/project-5.jpg',
      title: 'Library Website',
      tags: ['JavaScript', 'React', 'Firebase'],
      projectLink: 'https://github.com/NikkiAung/Library'
    },
    {
      imgSrc: '/images/project-4.jpg',
      title: 'Real Estate Website',
      tags: ['Web-design', 'HTML','CSS'],
      projectLink: 'https://nikkiaung.github.io/Real-Estate-Website/'
    },
    {
      imgSrc: '/images/project-6.jpg',
      title: 'Tic Tac Toe Game',
      tags: ['Java', 'Pattern Recognition', 'Algorithm'],
      projectLink: 'https://github.com/NikkiAung/TicTacToeButAdvanced'
    },
];

const Work = () => {
  return (
    <section id='work'className='section'>
        <div className="container">
            <h2 className='headline-2 mb-8'>
                My portfolio highlights
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({imgSrc,title,tags,projectLink},key)=> (
                    <ProjectCard
                        key={key} 
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Work
