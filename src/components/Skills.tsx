import { 
  Server, 
  Cloud, 
  Container, 
  GitBranch, 
  Settings, 
  Code, 
  Database,
  Shield,
  Cpu,
  Network,
  Terminal
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "DevOps & Automation",
      icon: <Settings className="text-primary" size={24} />,
      skills: [
        { name: "Jenkins", level: 90 },
        { name: "CI/CD", level: 95 },
        { name: "Terraform", level: 85 },
        { name: "Ansible", level: 80 }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: <Cloud className="text-accent" size={24} />,
      skills: [
        { name: "AWS", level: 90 },
        { name: "Linux", level: 95 },
        { name: "Docker", level: 90 },
        { name: "Kubernetes", level: 85 }
      ]
    },
    {
      title: "Development & Tools",
      icon: <Code className="text-primary" size={24} />,
      skills: [
        { name: "Python", level: 85 },
        { name: "GitHub", level: 95 },
        { name: "Bash/Shell", level: 90 },
        { name: "Git", level: 95 }
      ]
    }
  ];

  const techStack = [
    { name: "Linux", icon: <Terminal size={32} /> },
    { name: "AWS", icon: <Cloud size={32} /> },
    { name: "Docker", icon: <Container size={32} /> },
    { name: "Kubernetes", icon: <Network size={32} /> },
    { name: "Jenkins", icon: <Settings size={32} /> },
    { name: "Terraform", icon: <Server size={32} /> },
    { name: "Ansible", icon: <Cpu size={32} /> },
    { name: "GitHub", icon: <GitBranch size={32} /> }
  ];

  return (
    <section id="skills" className="section-spacing bg-secondary/20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-text">Technical Skills</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A comprehensive overview of my technical expertise and proficiency levels
        </p>
      </div>

      {/* Skill Categories with Progress Bars */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-card p-6 rounded-lg border border-border card-hover">
            <div className="flex items-center gap-3 mb-6">
              {category.icon}
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tech Stack Icons */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-8">Technologies I Work With</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 card-hover"
            >
              <div className="text-primary">
                {tech.icon}
              </div>
              <span className="text-sm font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;