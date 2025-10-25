import { GraduationCap, Trophy, User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-spacing">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-text">About Me</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Learn more about my background, education, and passion for DevOps engineering
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Personal Bio */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <User className="text-primary" size={24} />
            <h3 className="text-2xl font-semibold">Personal Bio</h3>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am a DevOps Engineer with a strong passion for automation, continuous improvement, and modern DevOps practices. 
            Highly motivated to streamline processes, enhance system reliability, and drive efficiency through innovative solutions.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My expertise spans across cloud platforms, containerization, CI/CD pipelines, and infrastructure as code. 
            I believe in the power of automation to transform complex workflows into seamless, efficient processes.
          </p>
        </div>

        {/* Education & Achievements */}
        <div className="space-y-8">
          {/* Education */}
          <div className="bg-card p-6 rounded-lg border border-border card-hover">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="text-primary" size={24} />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-foreground">BSc in Information and Communication Engineering</h4>
              <p className="text-muted-foreground">Bangladesh University of Professionals (BUP)</p>
            </div>
          </div>

          {/* Leadership */}
          <div className="bg-card p-6 rounded-lg border border-border card-hover">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="text-accent" size={24} />
              <h3 className="text-xl font-semibold">Leadership</h3>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-foreground">President of BUP Robotics Club</h4>
              <p className="text-muted-foreground">Leading innovative robotics projects and fostering technical excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;