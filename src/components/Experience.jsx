import { experience } from '../data/content'
import './Experience.css'

export default function Experience() {

  return (
    <section id="experience" className="section experience" >
      <div className="section-head" >
        <p className="eyebrow">Experience</p>
        <h2 className="section-title">Where the time went</h2>
      </div>

      <ol className="timeline">
        {experience.map((role) => (
          <li className="timeline__item" key={`${role.org}-${role.year}`} >
            <span className="timeline__year">{role.year}</span>
            <div className="timeline__marker" aria-hidden="true" />
            <div className="timeline__body">
              <h3 className="timeline__role">
                {role.role} <span className="timeline__org">— {role.org}</span>
              </h3>
              <p className="timeline__desc">{role.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
