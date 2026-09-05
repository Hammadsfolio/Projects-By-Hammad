import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LightRays from './components/LightRays'
import Button from './components/Button'

export default function App() {
  return (
    <>
      <div className='bg-main'>
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1.3}
          lightSpread={0.7}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.2}
          noiseAmount={0}
          distortion={0}
          className="custom-rays"
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
        <Nav />
        {/* <main> */}
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        {/* </main> */}
        <Footer />
      </div>
    </>
  )
}
