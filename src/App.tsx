import HeroSection from '@/components/ui/glassmorphism-trust-hero'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Projects from '@/components/Projects'
import SkillsCertifications from '@/components/SkillsCertifications'
import References from '@/components/References'
import Gallery from '@/components/Gallery'
import NavBar from '@/components/NavBar'
import ThemeToggle from '@/components/ThemeToggle'

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-zinc-950 transition-colors">
      <NavBar />
      <ThemeToggle />
      <HeroSection />
      <Experience />
      <Education />
      <Projects />
      <SkillsCertifications />
      <References />
      <Gallery />
    </div>
  )
}
