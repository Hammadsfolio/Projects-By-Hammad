import { skills } from '../data/content'
import Button from './Button'
import './Skills.css'
import HtmlSvg from '../Svg Icons/html-svgrepo-com.svg'
import CssSvg from '../Svg Icons/css-3-svgrepo-com.svg'
import JsSvg from '../Svg Icons/js-official-svgrepo-com.svg'
import ReactSvg from '../Svg Icons/react-javascript-js-framework-facebook-svgrepo-com.svg'
import NodeSvg from '../Svg Icons/node-js-svgrepo-com.svg'
import ReduxSvg from '../Svg Icons/redux-svgrepo-com.svg'
import BootstrapSvg from '../Svg Icons/bootstrap-svgrepo-com.svg'
import GitSvg from '../Svg Icons/git-svgrepo-com.svg'
import GithubSvg from '../Svg Icons/github-142-svgrepo-com.svg'

export default function Skills() {

  let skillImg = [
    {
      HTML: HtmlSvg
    },
    {
      CSS: CssSvg
    },
    {
      JavaScript: JsSvg
    },
    {
      React: ReactSvg
    },
    {
      NodeJS: NodeSvg
    },
    {
      Redux: ReduxSvg
    },
    {
      BootStrap: BootstrapSvg
    },
    {
      Git: GitSvg
    },
    {
      Github: GithubSvg
    }
  ]

  return (
    <section id="skills" className="section skills">
      <div className="section-head" data-reveal>
        <p className="eyebrow">Capabilities</p>
        <h2 className="section-title">Tools I reach for</h2>
      </div>
      <div className='marquee-wrapper'>
        <div className="marquee">
          <div className="marquee-content">
            {
              skillImg.map((e, i) => {
                const [name, image] = Object.entries(e)[0];

                return (
                  <span><img src={image} alt={name} />
                  </span>
                )
              })
            }
          </div>
          <div className="marquee-content marquee-right">
            {
              skillImg.map((e, i) => {
                const [name, image] = Object.entries(e)[0];

                return (
                  <span className='marquee-img-text-wrap'>
                    <img src={image} alt={name} className='img-hover' />
                  </span>
                )
              })
            }
          </div>
        </div>

        <div className="marquee-text_wrap">
          <div className="marquee_text-content">
            {
              skillImg.map((e, i) => {
                const [name, image] = Object.entries(e)[0];

                return (
                  <span className='marquee-img-text-wrap'>
                    <Button btn={name} />
                  </span>
                )
              })
            }
          </div>
          <div className="marquee_text-content">
            {
              skillImg.map((e, i) => {
                const [name, image] = Object.entries(e)[0];

                return (
                  <span className='marquee-img-text-wrap'>
                    <Button btn={name} />
                  </span>
                )
              })
            }
          </div>
        </div>



      </div>
      
    </section>
  )
}