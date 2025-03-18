
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, LinkedinIcon } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen pt-20 flex items-center bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-portfolio-purple font-medium mb-3 animate-fade-in">Hi, my name is</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
              Devansh
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-500 mb-6 opacity-0 animate-fade-in-delayed">
              I build things for the web.
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl opacity-0 animate-fade-in-delayed-more">
              I'm a frontend developer specializing in building exceptional digital experiences. 
              Currently, I'm focused on creating accessible, human-centered products.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-portfolio-indigo hover:bg-portfolio-purple transition-colors">
                <a href="#projects">View My Work</a>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="hover:border-portfolio-purple hover:text-portfolio-purple transition-colors">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            
            <div className="mt-12 flex space-x-6 items-center">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-portfolio-purple transition-colors text-gray-700"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-portfolio-purple transition-colors text-gray-700"
              >
                <LinkedinIcon size={24} />
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end hidden custom-min-w-1022:block">
            <div className="relative max-w-sm mx-auto lg:mx-0 mb-8 lg:mb-0">
              <div className="absolute w-full h-full bg-portfolio-purple/20 rounded-lg -top-3 -right-3 z-0"></div>
              <div className="absolute w-full h-full bg-portfolio-indigo/30 rounded-lg -bottom-3 -left-3 z-0"></div>
              <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80" 
                  alt="Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
