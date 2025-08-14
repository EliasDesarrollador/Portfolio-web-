const Skills = () => {
  const skills = {
    frontend: [
      "React", "TypeScript", "Next.js", "Vue.js", "HTML5", "CSS3", 
      "Tailwind CSS", "SASS", "JavaScript ES6+", "jQuery"
    ],
    backend: [
      "Node.js", "Express.js", "Python", "Django", "FastAPI", "PHP", 
      "Laravel", "REST APIs", "GraphQL", "Microservices"
    ],
    database: [
      "MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", 
      "Supabase", "Prisma", "Mongoose"
    ],
    tools: [
      "Git", "Docker", "AWS", "Vercel", "Netlify", "Linux", 
      "VS Code", "Figma", "Postman", "Jest"
    ]
  };

  const SkillCategory = ({ title, skillList, delay }: { title: string, skillList: string[], delay: string }) => (
    <div className={`card-modern fade-in-up ${delay}`}>
      <h3 className="text-xl font-semibold mb-4 glow-text">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skillList.map((skill, index) => (
          <span key={index} className="skill-badge">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="section-padding">
      <div className="fade-in-up">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Herramientas & <span className="glow-text">Tecnologías</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCategory 
            title="Frontend" 
            skillList={skills.frontend} 
            delay="stagger-1"
          />
          <SkillCategory 
            title="Backend" 
            skillList={skills.backend} 
            delay="stagger-2"
          />
          <SkillCategory 
            title="Bases de Datos" 
            skillList={skills.database} 
            delay="stagger-3"
          />
          <SkillCategory 
            title="Herramientas" 
            skillList={skills.tools} 
            delay="stagger-4"
          />
        </div>
        
        <div className="mt-16 text-center fade-in-up stagger-2">
          <p className="text-lg text-foreground-muted max-w-3xl mx-auto leading-relaxed">
            Siempre estoy aprendiendo nuevas tecnologías y manteniéndome actualizado 
            con las últimas tendencias del desarrollo web para ofrecer las mejores soluciones.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;