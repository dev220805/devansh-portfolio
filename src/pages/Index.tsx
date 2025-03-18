
import React from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
    </div>
  );
};

export default Index;
