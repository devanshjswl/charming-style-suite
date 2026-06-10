import { Nav } from './components/hattrick/Nav'
import { HeroVideo } from './components/hattrick/HeroVideo'
import { About } from './components/hattrick/About'
import { TurfShowcase } from './components/hattrick/TurfShowcase'
import { Stats } from './components/hattrick/Stats'
import { Gallery } from './components/hattrick/Gallery'
import { FinalCTA } from './components/hattrick/FinalCTA'
import { SiteFooter } from './components/hattrick/SiteFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main role="main">
        <HeroVideo />
        <About />
        <TurfShowcase />
        <Stats />
        <Gallery />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  )
}