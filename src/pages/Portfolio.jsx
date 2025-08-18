import { documentTextOutline } from 'ionicons/icons'
import { IonIcon } from '@ionic/react'
import { bookOutline } from 'ionicons/icons'

export default function Portfolio() {
  return (
      <article className="portfolio" data-page="portfolio" style={{ display: 'block', color: 'black' }}>
        <br/><br/>
        <header>
          <div style={{ display: 'flex' }}>
          <h2 className="h2 article-title">
            Publications</h2>
            </div>
        </header>
  
        <section className="timeline">
          
  
          <ol className="timeline-list force-left">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title"><a className='anchor-text' href='https://doi.org/10.1002/adtp.202400546' target='_blank'>Nanoparticle-Based Therapeutics for Glioblastoma Multiforme Treatment</a></h4>
              <p className="timeline-text">Advanced Therapeutics</p>
              <p className="timeline-text" style={{ fontStyle: 'italic' }}>Sethi P, Ghosh S, Singh KK, Han SS, Bhaskar R, Sinha JK</p>
              <span>2025</span>
            </li>
  
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title"> School of Studies in Neuroscience, Jiwaji University, Gwalior</h4>
              <p className="timeline-text">Master of Science (Neuroscience)</p>
              <span>2006</span>
            </li>
  
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">School of Life Sciences, IGNO University, New Delhi</h4>
              <p className="timeline-text">Bachelor of Science (Major: Zoology)</p>
              <span>2002</span>
            </li>
          </ol>
  
  
        </section>
  
          
      </article>
    )
}