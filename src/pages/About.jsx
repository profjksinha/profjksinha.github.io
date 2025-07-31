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
        <p style={{textAlign:'left !important'}}>
          I am a neuroscientist and Chief Scientific Officer at GloNeuro, 
          driven by a singular mission: to decode the mysteries of the brain and transform research into real-world solutions. 
          With a Ph.D. in Biochemistry and two decades of experience, my work focuses on the intersection of aging, neurodegeneration, 
          and metabolic disorders - particularly how oxidative stress and mitochondrial dysfunction shape brain health. <br/>
          My journey has taken me from labs at CSIR-CCMB and Amity University to global collaborations across 15+ countries, 
          supported by fellowships from IBRO, ISN, and FENS. I’ve published over 60 peer-reviewed papers 
          (in <em>The Lancet</em>, <em>Ageing Research Reviews</em>, and more), edited international journals, and mentored 25+ Ph.D. 
          and M.Sc. scholars. Whether exploring psychedelics for Alzheimer’s or nanotherapies for glioblastoma, I’m passionate about bridging 
          gaps between bench and bedside.<br/>
          Beyond research, I champion science communication, ethical innovation, and policies that prioritize brain health. 
          As a visiting faculty member and frequent speaker at international conferences, I thrive on collaborative problem-solving - whether 
          with academia, industry, or policymakers.<br/>
          Let’s connect if you share my curiosity about the brain’s potential or seek a collaborator to advance neurotherapeutics, education, or public health initiatives. Together, we can turn groundbreaking science into meaningful impact.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title" style={{textAlign:'left !important'}}>What I'm doing</h3>
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