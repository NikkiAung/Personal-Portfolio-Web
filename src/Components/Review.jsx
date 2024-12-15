import ReviewCard from "./ReviewCard";
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
const BASE_PATH = '/Personal-Portfolio-Web/';
gsap.registerPlugin(useGSAP,ScrollTrigger);

const reviews = [
    {
      content: 'Aung is a top-performing, highly motivated, and reliable Computer Science student excelling in problem-solving and communication, strongly recommended for internships in CS or related fields.',
      name: 'Craig Persiko',
      imgSrc: '/images/people-1.jpg',
      company: 'CCSF CS Instructor'
    },
    {
      content: 'Aung is a hardworking, engaged student with exceptional achievements in mathematics and a genuine passion for learning, highly recommended for any opportunity.',
      name: 'Lily Lum',
      imgSrc: '/images/people-2.jpg',
      company: 'CCSF Calculus-1 Instructor'
    },
    {
      content: 'Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.',
      name: 'Jonathan Potter',
      imgSrc: '/images/people-3.jpg',
      company: 'CS Department Chair'
    },
    {
      content: 'Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.',
      name: 'Zenith',
      imgSrc: '/images/people-4.jpg',
      company: 'CS @ CCSF'
    },
    {
      content: 'Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.',
      name: 'Ava Thompson',
      imgSrc: '/images/people-5.jpg',
      company: 'TechMosaic'
    },
    {
      content: 'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
      name: 'Jonathan',
      imgSrc: '/images/people-6.jpg',
      company: 'Skyline Digital'
    }
];
const Review = () => {
  useGSAP(()=> {
    gsap.to('.scrub-slide', {
      scrollTrigger : {
        trigger: '.scrub-slide',
        scrub: true,
      },
      x:'-1000'
    })
  });
  return (
    <section id="reviews" className="section overflow-hidden">
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
                What My STEM Professors And CS Friends Say
            </h2>
            <div className="scrub-slide flex items-stretch gap-3 w-fit">
                {reviews.map(({content,name,imgSrc,company},key)=> (
                    < ReviewCard 
                        key={key}
                        content={content} 
                        name={name}
                        imgSrc={BASE_PATH+imgSrc}
                        company={company}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Review
