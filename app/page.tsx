'use client';

import React, { useState } from 'react';
import Navbar from '@/components/navigation/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import ArchitectureSection from '@/components/sections/ArchitectureSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import TrustSection from '@/components/sections/TrustSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import TechStackSection from '@/components/sections/TechStackSection';
import AutomationSection from '@/components/sections/AutomationSection';
import BeforeAfterSection from '@/components/sections/BeforeAfterSection';
import CtaSection from '@/components/sections/CtaSection';
import Footer from '@/components/navigation/Footer';
import ContactModal from '@/components/ui/ContactModal';

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#080C14] text-slate-100 selection:bg-[#F05323] selection:text-white">
      {/* Navigation */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Hero Section with Interactive 3D WebGL Canvas */}
      <HeroSection onOpenContact={() => setIsContactOpen(true)} />

      {/* The Production Failure Problem */}
      <ProblemSection />

      {/* System Architecture Interactive Blueprint */}
      <ArchitectureSection />

      {/* Services Cards */}
      <ServicesSection onOpenContact={() => setIsContactOpen(true)} />

      {/* Case Studies / Projects */}
      <ProjectsSection />

      {/* Verified Social Proof & Upwork Telemetry */}
      <TrustSection />

      {/* Enterprise Experience Timeline (Ex-Amazon, Wipro) */}
      <ExperienceSection />

      {/* Interconnected Tech Stack Constellation */}
      <TechStackSection />

      {/* Practical Automation Scenarios */}
      <AutomationSection onOpenContact={() => setIsContactOpen(true)} />

      {/* Before vs After Visual Transformation */}
      <BeforeAfterSection />

      {/* High-Converting Final Call To Action */}
      <CtaSection onOpenContact={() => setIsContactOpen(true)} />

      {/* Footer */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Lead Conversion Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </main>
  );
}
