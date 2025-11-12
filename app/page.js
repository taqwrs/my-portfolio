// app/page.js
"use client"
import FadeIn from '@/components/animate/FadeIn'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import SkillsSection from '@/components/sections/SkillsSection'
import PortfolioSection from '@/components/sections/PortfolioSection'
import ResumeSection from '@/components/sections/ResumeSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      
      <FadeIn>
        <AboutSection />
      </FadeIn>

      <FadeIn>
        <SkillsSection />
      </FadeIn>

      <FadeIn>
        <PortfolioSection />
      </FadeIn>

      <FadeIn>
        <ResumeSection />
      </FadeIn>

      <FadeIn>
        <ContactSection />
      </FadeIn>
    </>
  )
}