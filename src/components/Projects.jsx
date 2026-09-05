import './Projects.css'
import DriftWall from './DriftWall';
import EcomGlobexImg from '../data/Ecomglobex.png'
import FortHillsImg from '../data/FortHills.png'
import MakanaImg from '../data/Makana.png'
import NazgrowImg from '../data/Nazgrow.png'
import PrimeAmbitionImg from '../data/PrimeAmbition.png'




export default function Projects() {

  const items = [
    { image: NazgrowImg, title: 'Peaks', href: 'https://nazgrow.com/' },
    { image: MakanaImg, title: 'Falls', href: 'https://dev-makanaa.pantheonsite.io/' },
    { image: EcomGlobexImg, title: 'Falls', href: 'https://ecomglobex.com/' },
    { image: FortHillsImg, title: 'Pup', href: 'https://forthilldistributors.com/' },
    { image: PrimeAmbitionImg, title: 'Falls', href: 'https://primeambition.co/' },
    { image: MakanaImg, title: 'Falls', href: 'https://dev-makanaa.pantheonsite.io/' },
    { image: EcomGlobexImg, title: 'Falls', href: 'https://ecomglobex.com/' },
    { image: FortHillsImg, title: 'Pup', href: 'https://forthilldistributors.com/' },
    { image: PrimeAmbitionImg, title: 'Falls', href: 'https://primeambition.co/' },
    { image: NazgrowImg, title: 'Peaks', href: 'https://nazgrow.com/' },
  ];


  return (
    <section id="projects" className="section projects" >
      <div className="section-head" >
        <p className="eyebrow">Selected work</p>
        <h2 className="section-title">A few things I&apos;ve shipped</h2>
      </div>

      <div style={{ height: 600 }}>
        <DriftWall
          items={items}
          columns={5}
          tileWidth={200}
          tileHeight={132}
          gap={18}
          tilt={16}
          turn={-14}
          perspective={1200}
          depth={120}
          speed={42}
          direction="up"
          variance={0.45}
          parallax={0.6}
          lift={64}
          fade={0.6}
          dim={0.55}
          overlayColor="#060010"
          radius={14}
          roll={0}
          pauseOnHover={false}
          grayscale={false}
        />
      </div>
    </section>
  )
}
