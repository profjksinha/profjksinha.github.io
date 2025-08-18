import { documentTextOutline } from 'ionicons/icons'
import { IonIcon } from '@ionic/react'
import { bookOutline } from 'ionicons/icons'

export default function Resume() {
  return (
    <article className="resume" data-page="resume" style={{ display: 'block'}}>
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

        <ol className="timeline-list force-left">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title"> ICMR – NIN and Osmania University, Hyderabad</h4>
            <p className="timeline-text">Doctor of Philosophy (Biochemistry)</p>
            <span>2015</span>
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

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IonIcon icon={bookOutline} />
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list force-left">

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Chief Scientific Officer</h4>
            <p className="timeline-text">GloNeuro, Sector 107, Noida, India </p>
            <span>April 2022 – Ongoing</span>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Consultant Neuroscientist</h4>
            <p className="timeline-text">Shiksha Infotech, Bangalore, India</p>
            <span>Apr 2023 – Ongoing</span>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Consultant Neuroscientist</h4>
            <p className="timeline-text">REM42 Technologies, Bangalore, India</p>
            <span>Jun 2022 – Dec 2022</span>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title"> Assistant Professor (Grade III)</h4>
            <p className="timeline-text">Amity Institute of Neuropsychology and 
Neurosciences (AINN), Amity University UP, Noida, India</p>
            <span>September 2017 – March 2022r</span>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">SERB – National Post-Doctoral Fellow and Research Associate</h4>
            <p className="timeline-text">CSIR - 
Centre for Cellular and Molecular Biology (CCMB), Hyderabad, India</p>
            <span>January 2016 – August 2017</span>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">ICMR/ NIN-Senior Research Fellow and Research Associate</h4>
            <p className="timeline-text"> National 
Institute of Nutrition (NIN), Hyderabad, India</p>
            <span>July 2009 – December 2015</span>
            <ul className="timeline-text">
              <li>6 months as <strong className='force-bold'>IBRO APRC Research Exchange Fellow / UNSW Visiting Fellow</strong> at University of 
New South Wales, Sydney, Australia</li>
              <li> 4 months as <strong className='force-bold'>Young Investigator Fellow & Ricerca Assegnista 
(Research Fellow)</strong> at Università degli Studi di Verona, Verona, Italy</li>
            </ul>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Junior Research Fellow (CSIR)</h4>
            <p className="timeline-text">Dept of Neurophysiology, National 
Institute of Mental Health And Neuro Sciences, Bangalore, India</p>
            <span>September 2007 – February 2009</span>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">BCIL Research Assistant & Trainee</h4>
            <p className="timeline-text">Biotech Industrial Training Program of 
DBT, Government of India & Biotech Consortium India Ltd. (BCIL)</p>
            <span>June 2006 – July 2007</span>
          </li>
        </ol>
      </section>

      <button className="form-btn" type="button">
        <IonIcon icon={documentTextOutline} />
        <a href='/CV/CV_Dr Jitendra.pdf' target='_blank'>
        <span>Download CV</span></a>
      </button>
    </article>
  )
}