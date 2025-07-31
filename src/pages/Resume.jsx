import { documentTextOutline } from 'ionicons/icons'
import { IonIcon } from '@ionic/react'
import { bookOutline } from 'ionicons/icons'

export default function Resume() {
  return (
    <article className="resume" data-page="resume" style={{ display: 'block', color: 'black' }}>
      <br/><br/>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IonIcon icon={bookOutline} />
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Your University</h4>
            <p className="timeline-text">Your Degree</p>
            <span>Year — Year</span>
          </li>
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IonIcon icon={bookOutline} />
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Your Position</h4>
            <p className="timeline-text">Company Name</p>
            <span>Year — Year</span>
            <ul className="timeline-text">
              <li>Responsibility 1</li>
              <li>Responsibility 2</li>
            </ul>
          </li>
        </ol>
      </section>

      <button className="form-btn" type="button">
        <IonIcon icon={documentTextOutline} />
        <span>Download CV</span>
      </button>
    </article>
  )
}