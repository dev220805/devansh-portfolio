
import React from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <HeroSection />
      <div className="space-y-16 md:space-y-24">
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
      </div>
    </div>
  );
};

export default Index;
