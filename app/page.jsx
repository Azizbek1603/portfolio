import './page.scss'
import Link from 'next/link'
import Header from './layout/header/header'
import About from './layout/about/about';
import Skills from './layout/skills/skills';
import Projects from './layout/projects/project';
export default function Home() {
  return (
    <main className="main">
      <Header />
      <About />
      <Skills />
      <Projects />
    </main>
  )
}
