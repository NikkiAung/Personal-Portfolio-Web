import { useInView } from 'react-intersection-observer';
import ProjectCard from "./ProjectCard";
import React from 'react';
import PROJECT_LINKS from '../config/projectLinks';
const BASE_PATH = '/Personal-Portfolio-Web/';
const works = [
    {
      imgSrc: 'images/project-11.png',
      title: 'BurmeseEduGuide website',
      tags: ['GEMINI-API', 'RAG', 'PYTHON','STREAMLIT','FIREBASE'],
      projectLink: PROJECT_LINKS.BURMESE_EDU
    },
    {
      imgSrc: 'images/project-2.png',
      title: 'Diet Plan Design',
      tags: ['Figma','UI/UX','Web Design','Layout'],
      projectLink: PROJECT_LINKS.DIET_PLAN
    },
    {
      imgSrc: 'images/project-3.jpg',
      title: 'Full Stack Recipe Website',
      tags: ['Mongo.DB','Express.js','React','Node.js'],
      projectLink: PROJECT_LINKS.RECIPE
    },
    {
      imgSrc: 'images/project-5.png',
      title: 'Library Website',
      tags: ['JavaScript', 'React', 'Firebase','Tailwind CSS'],
      projectLink: PROJECT_LINKS.LIBRARY
    },
    {
      imgSrc: 'images/project-4.png',
      title: 'Real Estate Website',
      tags: ['Web-design', 'HTML','CSS','Responsive'],
      projectLink: PROJECT_LINKS.REAL_ESTATE
    },
    {
      imgSrc: 'images/project-7.png',
      title: 'Full Stack Doctor Booking System',
      tags: ['Mongo.DB','Express.js','React','Node.js','Cloudinary','Render'],
      projectLink: PROJECT_LINKS.DOCTOR
    },
    {
      imgSrc: 'images/project-8.png',
      title: 'Amazon Clone',
      tags: ['HTML', 'CSS', 'JavaScript'],
      projectLink: PROJECT_LINKS.AMAZON
    },
    {
      imgSrc: 'images/project-10.png',
      title: 'Tic Tac Toe Game',
      tags: ['Java', 'Pattern Recognition'],
      projectLink: PROJECT_LINKS.TIC_TAC_TOE
    },
    {
      imgSrc: 'images/project-9.png',
      title: 'Landify Landing Page',
      tags: ['HTML', 'Tailwind CSS'],
      projectLink: PROJECT_LINKS.LANDIFY
    },
];

const Work = () => {
  return (
    <section id='work' className='section'>
      <div className="container">
        <h2 className='headline-2 mb-8'>
          My portfolio highlights
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({imgSrc, title, tags, projectLink}, index) => (
            <LazyProjectCard
              key={index}
              imgSrc={BASE_PATH+imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              delay={index * 0.1} // Add stagger effect
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// Create a wrapper component for lazy loading
const LazyProjectCard = ({ imgSrc, title, tags, projectLink, delay }) => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
    rootMargin: '150px 0px',
  });

  // Preload image
  const [imageLoaded, setImageLoaded] = React.useState(false);
  
  React.useEffect(() => {
    if (inView) {
      const img = new Image();
      img.src = imgSrc;
      img.onload = () => {
        setImageLoaded(true);
      };
    }
  }, [inView, imgSrc]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        inView && imageLoaded
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ 
        transitionDelay: `${delay}s`,
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <ProjectCard
        imgSrc={imgSrc}
        title={title}
        tags={tags}
        projectLink={projectLink}
        classes=""
      />
    </div>
  );
};

export default Work;
