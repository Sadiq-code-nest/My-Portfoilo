import { ExternalLink, Github, Server, Code } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "ASP.NET Core Deployment",
      description: "Deployed ArtGallery Website on EC2 Ubuntu server with Nginx reverse proxy and Bash automation for streamlined deployment process.",
      technologies: ["ASP.NET Core", "EC2", "Ubuntu", "Nginx", "Bash", "Linux"],
      githubUrl: "https://github.com/Sadiq-code-nest",
      category: "Web Application Deployment",
      icon: <Code size={24} />,
      highlights: [
        "Automated deployment with Bash scripts",
        "Nginx reverse proxy configuration",
        "Ubuntu server optimization",
        "SSL certificate implementation"
      ]
    },
    {
      title: "Java Web Application with Tomcat",
      description: "Deployed Java web application on EC2 server using Nginx, configured Apache Tomcat 9, including both manual and shell script automation.",
      technologies: ["Java", "Apache Tomcat", "EC2", "Nginx", "Shell Script", "Linux"],
      githubUrl: "https://github.com/Sadiq-code-nest",
      category: "Enterprise Application Deployment",
      icon: <Server size={24} />,
      highlights: [
        "Apache Tomcat 9 configuration",
        "Load balancing with Nginx",
        "Automated deployment scripts",
        "Performance monitoring setup"
      ]
    }
  ];

  return (
    <section id="portfolio" className="section-spacing bg-secondary/20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-text">Portfolio</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Showcase of my DevOps projects and deployment solutions
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-card rounded-lg border border-border overflow-hidden card-hover"
          >
            {/* Project Header */}
            <div className="p-6 border-b border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {project.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.category}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Project Details */}
            <div className="p-6">
              {/* Key Highlights */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors text-sm font-medium"
                >
                  <Github size={16} />
                  View Code
                </a>
                <button className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors text-sm font-medium">
                  <ExternalLink size={16} />
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Projects Note */}
      <div className="text-center mt-12">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-card rounded-lg border border-border">
          <Github size={20} className="text-primary" />
          <span className="text-muted-foreground">More projects available on</span>
          <a
            href="https://github.com/Sadiq-code-nest"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;