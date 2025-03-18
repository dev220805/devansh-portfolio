
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
    <section id="skills" className="bg-white">
      <div className="section-container">
        <h2 className="section-heading">My Skills</h2>
        <p className="text-gray-600 max-w-3xl mb-12">
          Throughout my journey as a developer, I've worked with a variety of technologies and tools. 
          Here's a comprehensive list of my technical skills.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.id} className="hover:shadow-md transition-shadow">
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
                      className="badge"
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
