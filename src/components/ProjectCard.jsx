
import { useState } from 'react';





function ProjectCard ({project, onHover, onLeave, isHovered}) {


    return (
      <>
      
    

      <a href={project.link} target="_blank" 
      className="project-link interactive-right"
      key={project.id}
      id={project.id} 
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      >
      <article className='project' 
       
      
      >
        <div className="preview">
      <img src={project.src} alt={project.alt} className="static"/>
      {isHovered && (
            <img src={project.srcdemo} alt="" className="demo" />
          )}
      </div>
      <div className='text'>
      <h3>{project.title}</h3>
      </div>
    </article>
    </a>
    </>
      
    )
  
}

function MapList({features}) {
 return (
  
  <>
  <ul className='project-features'>
  {features.map(f => (
   <li key={f} className='project-feature'>{f}</li>
  ))}
  </ul>
  </>
 )
};


export default function Projects({projects}) {

  const [hoverId, setHoverId] = useState(null);

  return (
  <>
   <div className="projects-flex projects-left">
  {projects.map(p => (<ProjectCard key={p.id} 
  project={p} //prop project here trigger function
  onHover={() => setHoverId(p.id)}
  onLeave={() => setHoverId(null)} 
  isHovered={hoverId === p.id}
  /> ) 
  )
  }
  </div> 

     <div className="features projects-right">
  {projects
  .filter(p => p.id === hoverId)
  .map(p => (<MapList key={p} features={p.features} />))
  }
  </div>
  
  </>
  )
};