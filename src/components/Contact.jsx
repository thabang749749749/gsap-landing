import {openingHours} from "../../constants/index.js";
import { socials} from "../../constants/index.js";
import {useGSAP} from "@gsap/react";
import { SplitText} from "gsap/all";
import gsap from "gsap";


const Contact = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create('#contact h2', { type: 'words'});

    const timeLine = gsap.timeline({
      scrollTrigger: {
        trigger: '#contact',
        start: 'top center',
      },
      ease: 'power1.inOut'
    })

    timeLine
      .from(titleSplit.words, {
      opacity: 0, yPercent: 100, stagger: 0.02
    })
      .from('#contact h3, #contact p', {
        opacity: 0, yPercent: 100, stagger: 0.02
      })
      .to('#f-right-leaf', {
        y: '-50', duration: 1, ease: 'power1.inOut'
      })
      .to('#f-left-leaf', {
        y: '-50', duration: 1, ease: 'power1.inOut'
    }, '<')
  })

  return (
    <footer id="contact">
      <img src="/images/footer-left-leaf.png" alt="left-leaf" id="f-left-leaf" />
      <img src="/images/footer-right-leaf.png" alt="right-leaf" id="f-right-leaf" />

      <div className="content">
        <h2>Where to Find Us</h2>

      <div>
        <h3>Visit Our Bar</h3>
        <p>666, Vilakazi str. Soweto, Gauteng, South Africa</p>
      </div>

      <div>
        <h3>Contact Us</h3>
        <p>(+27) 016-664-321</p>
        <p>hello@thbngXcocktail.com</p>
      </div>

      <div>
        <h3>Open Every day</h3>
        {openingHours.map((time) => (
        <p key={time.day}>
          {time.day} : {time.time}
        </p>))}
      </div>

      <div>
        <h3>Socials</h3>

        <div className="flex-center gap-5">
          {socials.map((social) => (
            <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}>
              <img src={social.icon} alt="social" />
            </a>
          ))}
        </div>
      </div>
      </div>
    </footer>
  )
}
export default Contact
