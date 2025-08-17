// src/components/Projects/Projects.jsx
import './Projects.css';
import ProjectCard from './ProjectCard';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Weather App',
      description: 'A web app that shows real-time weather data using the OpenWeather API.',
      image: '/assets/images/weather-app.png',
      github: 'https://github.com/PaNiNi005/my-weather-app',
      demo: '#'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'My personal portfolio website to showcase my skills and projects.',
      image: '/assets/images/portfolio.png',
      github: 'https://github.com/PaNiNi005/Lab3_portfolio203',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of the projects I've worked on recently.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
