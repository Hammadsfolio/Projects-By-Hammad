import { profile } from '../data/content'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <a href="#top" className="footer__top">
          Back to top &#8593;
        </a>
      </div>
    </footer>
  )
}
