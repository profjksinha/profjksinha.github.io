// pages/About.jsx
import SplashCursor from '../components/SplashCursor'



export default function About() {
  return (
    <>
    
    <article className="about active" data-page="about">
      <SplashCursor />
      <br/><br/>
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>Your about text here...Your about text here...Your about text here...Your about text here...Your about text here...Your about text here...Your about text here...Your about text here...Your about text here...Your about text here...Your about text here...Your about text here...Your about text here...Your about text here...Your about text here...</p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What I'm doing</h3>
        <ul className="service-list">
          {/* Service items here */}
        </ul>
      </section>

      <section className="clients">
        <h3 className="h3 clients-title">Skills</h3>
        <ul className="clients-list has-scrollbar">
          {/* Skill logos here */}
        </ul>
      </section>
    </article>
    </>
  )
}