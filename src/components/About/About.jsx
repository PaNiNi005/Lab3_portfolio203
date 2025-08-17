// src/components/About/About.jsx
import { Code, Palette, Zap, Heart } from 'lucide-react';
import './About.css';

function About() {
  const skills = [
    { name: 'Frontend Development', icon: <Code size={24} />, color: '#3b82f6' },
    { name: 'UI/UX Design', icon: <Palette size={24} />, color: '#10b981' },
    { name: 'Performance Optimization', icon: <Zap size={24} />, color: '#f59e0b' },
    { name: 'Problem Solving', icon: <Heart size={24} />, color: '#ef4444' }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
           <p className="about-description">
            Hi! I'm Ratjikarn Kuangkham, but you can call me Parnward. I'm a university student at RMUTL, 
            passionate about learning new technologies and exploring the world of web development. 
            I love creating websites that are both functional and visually appealing.
            </p>

           <p className="about-description">
           When I'm not studying or coding, I enjoy listening to music and playing video games.
           These hobbies help me relax and spark my creativity for new projects and ideas.
           </p>

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div 
                    className="skill-icon"
                    style={{ backgroundColor: skill.color + '20', color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>

            <div className="about-actions">
              <a href="/resume.pdf" className="btn-primary" download>
                Download Resume
              </a>
              <button 
                className="btn-secondary"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </button>
            </div>
          </div>

          <div className="about-image">
            <div className="image-placeholder">
              <div className="placeholder-content">
              <div class="hero-image">
            <img src="images/me.jpg" alt="Profile Picture" />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;