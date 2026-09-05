import { profile } from '../data/content'
import './Contact.css'

export default function Contact() {

  return (
    <section id="contact" className="section contact" >
      <div className="contact__inner" >
        <p className="eyebrow">Contact</p>
        <h2 className="contact__title">
          Got something worth
          <br />
          building? Let&apos;s talk.
        </h2>

        <a className="contact__email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>

        <div className="contact__socials">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="contact__social"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
