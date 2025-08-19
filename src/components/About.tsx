
const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="fade-in-up">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Sobre <span className="glow-text">Mí</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="space-y-6 fade-in-up stagger-1">
            <p className="text-lg text-foreground-muted leading-relaxed">
              Soy un desarrollador full stack apasionado por crear soluciones digitales que 
              impacten positivamente en la vida de las personas. Con más de 1 año de experiencia trabajando de forma freelance, 
              me especializo en el desarrollo de aplicaciones web modernas y escalables.
            </p>

            <p className="text-lg text-foreground-muted leading-relaxed">
              Mi enfoque se centra en escribir código limpio, implementar las mejores prácticas 
              de desarrollo y mantenerme actualizado con las últimas tecnologías del sector. 
              Disfruto colaborando en equipos multidisciplinarios y enfrentando desafíos .
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="skill-badge">+1 año experiencia</span>
              <span className="skill-badge">2+ proyectos completados</span>
              <span className="skill-badge">Desarrollo Web </span>
            </div>
          </div>

          {/* Foto + Experiencia */}
          <div className="space-y-6 fade-in-up stagger-2">
            {/* Foto */}
            <div className="flex justify-center">
              <img
                src="/images/elias.jpg.jpg"
                alt="Foto de Elías"
                className="rounded-xl shadow-lg w-64 h-64 object-cover"
              />
            </div>

            {/* Experiencia */}
            <div className="card-modern">
              <h3 className="text-2xl font-semibold mb-6 glow-text">Experiencia</h3>

              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-semibold text-foreground">Senior Full Stack Developer</h4>
                  <p className="text-sm text-accent">Tech Solutions Inc. • 2024 - Presente</p>
                  <p className="text-foreground-muted mt-2">
                    Desarrollo de aplicaciones web complejas usando React, Node.js y bases de datos NoSQL.
                  </p>
                </div>

                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-semibold text-foreground">Frontend Developer</h4>
                  <p className="text-sm text-accent">Digital Agency • 2023 - 2024</p>
                  <p className="text-foreground-muted mt-2">
                    Creación de interfaces de usuario interactivas y responsive para clientes diversos.
                  </p>
                </div>

                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-semibold text-foreground">Web Developer</h4>
                  <p className="text-sm text-accent">StartUp Lab • 2022 - 2023</p>
                  <p className="text-foreground-muted mt-2">
                    Desarrollo de MVPs y prototipos para startups tecnológicas emergentes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
