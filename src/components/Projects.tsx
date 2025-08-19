import { ExternalLink, Github } from "lucide-react";
import project1Image from "@/assets/project-1.jpg";
import project2Image from "@/assets/project-2.jpg";
import project3Image from "@/assets/project-3.jpg";
import WhatsAppButton from "./WhatsAppButton";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Plataforma de comercio electrónico completa con panel de administración, gestión de inventario, procesamiento de pagos y sistema de usuarios avanzado.",
      image: project1Image,
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Aplicación de gestión de tareas colaborativa con funcionalidades en tiempo real, notificaciones push y dashboard analítico para equipos.",
      image: project2Image,
      technologies: ["Vue.js", "Firebase", "Tailwind", "PWA"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 3,
      title: "Jahugapp",
      description: "Juego Web escrito en javascript ,consiste en un juego de memorizacion de cartas.",
      image: project3Image,
      technologies: ["HTML5","CSS3", "firebase", "Netlify"],
      liveUrl: "https://jahugapp.netlify.app/",
      githubUrl: "https://github.com/EliasDesarrollador/Jahugapp"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="fade-in-up">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Mis <span className="glow-text">Proyectos</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`card-modern group fade-in-up stagger-${index + 1}`}
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a 
                    href={project.liveUrl}
                    className="p-2 bg-primary rounded-full text-primary-foreground hover:bg-primary-dark transition-colors duration-200"
                    aria-label="Ver proyecto en vivo"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="p-2 bg-secondary rounded-full text-secondary-foreground hover:bg-muted transition-colors duration-200"
                    aria-label="Ver código en GitHub"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-foreground-muted mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="skill-badge text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 fade-in-up stagger-4">
          <p className="text-lg text-foreground-muted mb-6">
            ¿Interesado en ver más de mi trabajo?
          </p>
          <button 
            onClick={() => window.open('https://github.com', '_blank')}
            className="btn-outline"
          >
            Ver más en GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;