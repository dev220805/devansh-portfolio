
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

type Project = {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with product listings, cart functionality, and checkout process.',
    imageSrc: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80',
    technologies: ['React', 'Supabase', 'Node.js', 'Tailwind CSS', 'Stripe'],
    githubUrl: 'https://github.com/dev220805/ecommerce-project',
    liveUrl: 'https://style-haven-eight.vercel.app/',
    featured: true
  },
  {
    id: 2,
    title: 'Train Booking Website',
    description: 'A frontend train booking application with seat selection, booking functionality, and user dashboard.',
    imageSrc: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Redux'],
    githubUrl: 'https://github.com/dev220805/irctc-dreamscape-72',
    liveUrl: 'https://irctc-dreamscape-72.vercel.app/',
    featured: true
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A weather application that shows current weather and forecasts based on location with interactive charts.',
    imageSrc: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80',
    technologies: ['JavaScript', 'Chart.js', 'OpenWeather API', 'CSS3'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: false
  },
  {
    id: 4,
    title: 'Blog Platform',
    description: 'A blog platform with content management system, user authentication, and comment functionality.',
    imageSrc: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: false
  }
];

const ContactDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-portfolio-indigo hover:bg-portfolio-purple">
          Contact Me
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold mb-4">Get in Touch</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <a 
            href="https://www.linkedin.com/in/devansh-bansal-916174213/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <Linkedin className="h-6 w-6 text-blue-600" />
            <div>
              <p className="font-medium">LinkedIn</p>
              <p className="text-sm text-gray-600">Connect with me professionally</p>
            </div>
          </a>
          
          <a 
            href="mailto:devanshbansal05@gmail.com" 
            className="flex items-center gap-3 p-4 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors"
          >
            <Mail className="h-6 w-6 text-amber-600" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-sm text-gray-600">devanshbansal05@gmail.com</p>
            </div>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-gray-50">
      <div className="section-container">
        <h2 className="section-heading">Featured Projects</h2>
        <p className="text-gray-600 max-w-3xl mb-12">
          Here are some of my recent projects. Each one was carefully crafted with attention to detail,
          from design to implementation and deployment.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden project-card">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.imageSrc} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button asChild variant="outline" size="sm">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                </Button>
                <Button asChild className="bg-portfolio-indigo hover:bg-portfolio-purple" size="sm">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild className="bg-portfolio-indigo hover:bg-portfolio-purple">
            <a href="https://github.com/dev220805?tab=repositories" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
            </a>
          </Button>
          
          <ContactDialog />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
