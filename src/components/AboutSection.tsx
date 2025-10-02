
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-gray-50">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-lg bg-white relative z-10 overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80" 
                  alt="Developer Portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="section-heading">About Me</h2>
            <p className="text-gray-600 mb-4">
              Hi there! I'm Devansh, a passionate full stack developer currently in my second year of 
              university. I'm enthusiastic about creating engaging web experiences and continuously expanding 
              my knowledge in modern technologies like React, TypeScript, and Tailwind CSS.
            </p>
            <p className="text-gray-600 mb-4">
              My journey in web development began during my first year of college, where I discovered 
              my passion for bringing designs to life through code. Since then, I've been working on various 
              personal projects and collaborative endeavors to enhance my skills and build a strong portfolio.
            </p>
            <p className="text-gray-600 mb-6">
              Beyond coding, I enjoy exploring new frameworks, participating in hackathons, and connecting 
              with other developers in the community. I'm always eager to take on new challenges and learn 
              technologies that will help me grow as a developer.
            </p>
            
            <Button asChild className="flex items-center gap-2 bg-portfolio-indigo hover:bg-portfolio-purple">
              <a href="https://docs.google.com/document/d/1gksqcxwBXDBdRpuHNv-SZT37hDRmcOw2QnX5OkrTNfc/edit?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <FileText className="h-4 w-4" /> Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
