
import { profile } from '../data/content'
import ProfileImage from '../data/subject_no_background.png'
import { Lottie } from 'lottie-react'
import LottieAnimation from '../data/Scene_no_watermark.json'
import Button from './Button'
import './Hero.css'

export default function Hero() {



  return (
    <section id="top" className="hero" >
      <div className="hero__scrim" />

      <div className='hero_section-wrapper'>
        <div className="hero__content">
          <p className="eyebrow" data-hero-line>
            Frontend Developer &middot; Karachi, PK
          </p>

          <h1 className="hero__name" data-hero-line>
            Hammad Hassan
          </h1>

          <p className="hero__statement" data-hero-line>
            I build fast, considered interfaces — the kind that feel obvious in hindsight.
          </p>

          <div className="hero__actions" data-hero-line>
            <Button btn="View Work" />
            <Button btn="Get In Touch" />
            {/* <a href="#projects" className="hero__btn hero__btn--primary">
              View work
            </a>
            <a href="#contact" className="hero__btn hero__btn--ghost">
              Get in touch
            </a> */}
          </div>
        </div>
        <div className="hero-img">
          {/* <img src={ProfileImage} alt="Nothing" /> */}
          <Lottie src={LottieAnimation} className='lottie-animation'  autoplay style={{  width: 400, height: 400 }} />
        </div>
      </div>
      <a href="#about" className="hero__scroll" aria-label="Scroll to about section">
        <span className="hero__scroll-line" />
        Scroll
      </a>
    </section>
  )
}
