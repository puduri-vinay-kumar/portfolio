//import React from 'react'
import ipl from '../../assets/ipl.png'
import jobby from '../../assets/jobbyapp.png'
import nxttrendz from '../../assets/nxttrendz.png'
const ProjectCard = ({image, title,link}) =>(
    <div className='p-4 md:w-1/3 mb-6'>
    <a href={link}>
        <div className='rounded-lg h-52 overflow-hidden'>
            <img src={image} alt="content" className='object-cover object-center h-full w-full' />
        </div>
        </a>
        <h2 className='text-xl font-medium title-font text-white mt-5'>{title}</h2>
        <a className='text-blue-300 hover:text-blue-100 inline-flex items-center mt-3'>Fullscreen 
            <svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' className='w-4 h-4 ml-2' viewBox='0 0 24 24'>
                <path d='MS 12h14M12 5l7 7-7 7'></path>
            </svg>
        </a>
    </div>
);

export default function Projects() {
    const projects = [
        {title:'Ipl Dashboard',image: ipl,link:"https://vinayipl10.ccbp.tech/"},
        {title:'Jobby App',image: jobby,link:"https://jobbyappbyvinay.ccbp.tech/"},
        {title:'E-Commerce Website',image: nxttrendz,link:"https://vinayipl10.ccbp.tech/"},
    ];
  return (
    <section id='projects' className='text-gray-400 bg-blue-950 body-font'>
        <div className='container px-3 py-11 mx-auto'>
            <div data-aos='fade-up' data-aos-delay='300' className='flex flex-col'>
                <div className='flex flex-wrap sm:flex-row flex-col py-6 mb-12'>
                    <h1 className='sm:w-2/5 text-white font-medium title-font text-3xl mb-2 sm:mb-0'>My projects</h1>
                    <p className='sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0'>
                    IPL Dashboard - A dynamic web app that visualizes IPL match data with interactive charts and statistics using React.js and REST APIs.<br/>
Jobby App- A job search platform with authentication, allowing users to explore and apply for jobs seamlessly. Built with React.js, REST API, and JWT authentication.<br/>
NxtTrendz- A modern eCommerce platform for browsing and purchasing products securely. Features user authentication, protected routes, and real-time updates using React.js, REST API, and JWT authentication.
                    </p>
                    
                </div>
            </div>
            <div data-aos='fade-up' data-aos-delay='400' className='flex flex-wrap sm:m-4 -mx-4 -mb-10 -mt-4'>
                {
                    projects.map((project, index)=>(
                        <ProjectCard key={index} {...project} />
                    ))
                }
            </div>
        </div>
    </section>
  )
}