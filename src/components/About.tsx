import React from 'react';
import { motion } from 'framer-motion';
import { 
  CodeBracketIcon, 
  PaintBrushIcon, 
  DevicePhoneMobileIcon,
  ServerIcon 
} from '@heroicons/react/24/outline';

const About: React.FC = () => {
  const skills = [
    { name: 'Frontend Development', icon: CodeBracketIcon, color: 'text-blue-500' },
    { name: 'UI/UX Design', icon: PaintBrushIcon, color: 'text-purple-500' },
    { name: 'Mobile Development', icon: DevicePhoneMobileIcon, color: 'text-green-500' },
    { name: 'Backend Development', icon: ServerIcon, color: 'text-orange-500' },
  ];

  const technologies = [
    'React', 'TypeScript', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL',
    'Tailwind CSS', 'Figma', 'Docker', 'AWS', 'Git', 'REST APIs'
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate developer with a love for creating meaningful digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Photo and skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile photo placeholder */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <p className="text-gray-600 font-medium">Profile Photo</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">🚀</span>
              </div>
            </div>

            {/* Skills */}
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  <skill.icon className={`h-6 w-6 ${skill.color}`} />
                  <span className="font-medium text-gray-700">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Bio and technologies */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Bio */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Turning Ideas Into Reality
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with over 4 years of experience 
                  creating digital solutions that make a difference. My journey in tech 
                  started with curiosity and has evolved into a deep love for clean code 
                  and user-centered design.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge with 
                  the developer community. I believe in continuous learning and 
                  staying up-to-date with the latest industry trends.
                </p>
                <p>
                  I specialize in building scalable web applications, creating 
                  intuitive user interfaces, and solving complex problems with 
                  elegant solutions. Every project is an opportunity to learn 
                  something new and push the boundaries of what's possible.
                </p>
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Technologies I Work With
              </h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium hover:bg-primary-200 transition-colors duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">10+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">4+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">10+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 