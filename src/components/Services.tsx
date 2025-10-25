import { 
  CloudCog, 
  Workflow, 
  Shield, 
  Rocket,
  GitMerge,
  MonitorSpeaker
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <CloudCog size={40} />,
      title: "Cloud Infrastructure",
      description: "Design and implement scalable cloud architectures on AWS with best practices for security, performance, and cost optimization."
    },
    {
      icon: <Workflow size={40} />,
      title: "CI/CD Pipeline Setup",
      description: "Build robust continuous integration and deployment pipelines using Jenkins, GitHub Actions, and other modern DevOps tools."
    },
    {
      icon: <Rocket size={40} />,
      title: "Application Deployment",
      description: "Expert deployment of applications using Docker containers, Kubernetes orchestration, and automated scaling strategies."
    },
    {
      icon: <GitMerge size={40} />,
      title: "Infrastructure as Code",
      description: "Implement infrastructure automation using Terraform and Ansible for consistent, reproducible, and version-controlled environments."
    },
    {
      icon: <Shield size={40} />,
      title: "Security & Monitoring",
      description: "Establish comprehensive monitoring, logging, and security practices to ensure system reliability and compliance."
    },
    {
      icon: <MonitorSpeaker size={40} />,
      title: "Process Optimization",
      description: "Analyze and optimize existing workflows, reducing deployment times and improving system reliability through automation."
    }
  ];

  return (
    <section id="services" className="section-spacing">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-text">Services</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Comprehensive DevOps solutions to streamline your development and deployment processes
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-card p-8 rounded-lg border border-border card-hover"
          >
            <div className="mb-6">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
              {service.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-lg border border-border">
          <h3 className="text-2xl font-semibold mb-4">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss how I can help streamline your DevOps processes and improve your deployment workflows.
          </p>
          <a href="#contact" className="btn-primary">
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;