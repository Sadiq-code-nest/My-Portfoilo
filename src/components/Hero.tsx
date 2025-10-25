import { ArrowDown, Mail, Github, Linkedin, Phone } from 'lucide-react';
import profileImage from '../assets/profile-picture.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-spacing pt-32">
      <div className="text-center space-y-8">
        {/* Profile Image */}
        <div className="relative mx-auto w-56 h-64 mb-8">
          <div className="gradient-border w-full h-full">
            <img
  src="/profile-picture.png"
  alt="Md Sadiqul Islam - DevOps Engineer"
  className="w-full h-full object-cover rounded-xl"
/>

          </div>
        </div>

        {/* Available Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full border border-border">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <span className="text-sm text-muted-foreground">Available for work</span>
        </div>

        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Hi, I'm a
            <br />
            <span className="gradient-text text-glow">DevOps</span>
            <br />
            Engineer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about automation, continuous improvement, and modern DevOps practices.
            Streamlining processes and driving efficiency through innovative solutions.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#portfolio" className="btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn-secondary">
            Get In Touch
          </a>
        </div>

        {/* Quick Contact Links */}
        <div className="flex justify-center items-center gap-6 pt-8">
          <a
            href="mailto:mdsadiq1221@gmail.com"
            className="p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://github.com/Sadiq-code-nest"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/sadiq-bup/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="tel:+8801798171553"
            className="p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
            aria-label="Phone"
          >
            <Phone size={20} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-12">
          <a
            href="#about"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowDown size={24} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;