
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
              <div className="w-64 h-64 md:w-80 md:h-80 bg-portfolio-indigo/20 rounded-full absolute -top-6 -right-6"></div>
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
              Hi there! I'm John Doe, a passionate frontend developer with over 5 years of experience 
              creating engaging web experiences. I specialize in building responsive, user-friendly interfaces 
              using modern technologies like React, TypeScript, and Tailwind CSS.
            </p>
            <p className="text-gray-600 mb-4">
              My journey in web development began when I was in college, where I discovered my love for 
              bringing designs to life through code. Since then, I've worked with various companies and 
              clients to deliver high-quality web applications.
            </p>
            <p className="text-gray-600 mb-6">
              Beyond coding, I enjoy contributing to open-source projects, writing technical articles, 
              and mentoring junior developers. I'm constantly learning new technologies to stay at the 
              forefront of web development trends.
            </p>
            
            <Button asChild className="flex items-center gap-2 bg-portfolio-indigo hover:bg-portfolio-purple">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
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
