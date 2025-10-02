
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Linkedin, Mail, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useToast } from '@/hooks/use-toast';

type Project = {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  inProgress?: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with product listings, cart functionality, and checkout process.',
    imageSrc: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80',
    technologies: ['React', 'Supabase', 'Node.js', 'Tailwind CSS', 'Stripe'],
    githubUrl: 'https://github.com/dev220805/ecommerce',
    liveUrl: 'https://ecommerce-jr38.vercel.app/',
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
    title: 'Job Finder Platform',
    description: 'A job seeking platform that helps users search and apply for jobs with advanced filtering and search capabilities.',
    imageSrc: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'API Integration'],
    githubUrl: 'https://github.com/dev220805/Job-Seeking',
    liveUrl: 'https://job-seeking-n9qz.vercel.app/',
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
    featured: false,
    inProgress: true
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
  const { toast } = useToast();
  
  const handleInProgressClick = (projectTitle: string) => {
    toast({
      title: "Project in Development",
      description: `${projectTitle} is currently under development and will be available soon.`,
      duration: 3000,
    });
  };
  
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
                <CardTitle className="flex items-center gap-2">
                  {project.title}
                  {project.inProgress && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Badge variant="outline" className="gap-1 border-amber-500 text-amber-600">
                            <Clock className="h-3 w-3" /> In Progress
                          </Badge>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>This project is currently under development</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </CardTitle>
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
                {project.inProgress ? (
                  <Button variant="outline" size="sm" onClick={() => handleInProgressClick(project.title)} className="flex items-center gap-2">
                    <Github className="h-4 w-4" /> Coming Soon
                  </Button>
                ) : (
                  <Button asChild variant="outline" size="sm">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github className="h-4 w-4" /> GitHub
                    </a>
                  </Button>
                )}
                
                {project.inProgress ? (
                  <Button 
                    size="sm" 
                    className="bg-portfolio-indigo hover:bg-portfolio-purple flex items-center gap-2"
                    onClick={() => handleInProgressClick(project.title)}
                  >
                    <Clock className="h-4 w-4" /> In Development
                  </Button>
                ) : (
                  <Button asChild className="bg-portfolio-indigo hover:bg-portfolio-purple" size="sm">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <Button asChild className="bg-portfolio-indigo hover:bg-portfolio-purple">
            <a href="https://github.com/dev220805?tab=repositories" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
