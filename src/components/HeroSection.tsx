import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, LinkedinIcon } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen pt-20 flex items-center">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-portfolio-purple font-medium mb-3 animate-fade-in">Hi, my name is</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
              John Doe
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-500 mb-6 opacity-0 animate-fade-in-delayed">
              I build things for the web.
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl opacity-0 animate-fade-in-delayed-more">
              I'm a frontend developer specializing in building exceptional digital experiences. 
              Currently, I'm focused on creating accessible, human-centered products.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-portfolio-indigo hover:bg-portfolio-purple">
                <a href="#projects">View My Work</a>
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            
            <div className="mt-12 flex space-x-6 items-center">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-portfolio-purple transition-colors"
              >
                <Github />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-portfolio-purple transition-colors"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-portfolio-purple/20 rounded-full absolute -top-6 -right-6"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 bg-portfolio-indigo/30 rounded-full absolute -bottom-6 -left-6"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-lg bg-white relative z-10 overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80" 
                  alt="Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <Button variant="ghost" size="icon" asChild>
            <a href="#projects">
              <ArrowDown />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
