
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type SkillCategory = {
  id: number;
  title: string;
  skills: string[];
  icon: string;
};

const skillCategories: SkillCategory[] = [
  {
    id: 1,
    title: 'Frontend Development',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue', 'Redux', 'Tailwind CSS', 'SASS/SCSS'],
    icon: '💻'
  },
  {
    id: 2,
    title: 'Backend Development',
    skills: ['Node.js', 'Express', 'Python', 'Django', 'GraphQL', 'RESTful APIs', 'PostgreSQL', 'MongoDB', 'Firebase'],
    icon: '🔧'
  },
  {
    id: 3,
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code', 'Webpack', 'Docker', 'AWS', 'Vercel', 'Netlify', 'CI/CD', 'Jest'],
    icon: '🛠️'
  },
  {
    id: 4,
    title: 'Design & Others',
    skills: ['Figma', 'Adobe XD', 'UI/UX Design', 'Responsive Design', 'Agile/Scrum', 'Technical Writing', 'SEO'],
    icon: '🎨'
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-white py-16 md:py-24 rounded-t-3xl shadow-md">
      <div className="section-container">
        <h2 className="section-heading">My Skills</h2>
        <p className="text-gray-600 max-w-3xl mb-12">
          Throughout my journey as a developer, I've worked with a variety of technologies and tools. 
          Here's a comprehensive list of my technical skills.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.id} 
              className="overflow-hidden transition-all duration-300 hover:shadow-lg border-t-4 hover:-translate-y-1"
              style={{ 
                borderTopColor: index === 0 ? '#3B82F6' : 
                              index === 1 ? '#8B5CF6' : 
                              index === 2 ? '#4F46E5' : 
                              '#1F2937'
              }}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  <CardTitle>{category.title}</CardTitle>
                </div>
                <CardDescription>Key technologies and tools</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="badge transition-all hover:bg-portfolio-indigo/20 hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
