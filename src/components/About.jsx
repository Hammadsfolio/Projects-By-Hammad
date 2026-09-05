import { profile } from '../data/content'
import './About.css'

export default function About() {

  return (
    <section id="about" className="section about" >
      <div className="about__grid">
        <div className="about__lead"  >
          <p className="eyebrow">About</p>
          <p className="about__quote">
            Couple of years in, and I still think the best interfaces are the ones
            you stop noticing.
          </p>
        </div>

        <div className="about__body">
          <p className="about__bio"  >
            {profile.bio}
          </p>

          <dl className="about__stats"  >
            {profile.stats.map((stat) => (
              <div className="about__stat" key={stat.label}>
                <dt className="about__stat-value">{stat.value}</dt>
                <dd className="about__stat-label">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
