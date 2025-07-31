// components/Sidebar.jsx
import { useState } from 'react'
import { IonIcon } from '@ionic/react'
import { chevronDown, mailOutline, logoLinkedin, logoGithub } from 'ionicons/icons'
import ProfileCard from './ProfileCard/ProfileCard'
export default function Sidebar() {
  const [showContacts, setShowContacts] = useState(false)

  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        {/* <figure className="avatar-box">
          
        </figure> */}

        <div className="info-content">
          <ProfileCard
            name="Dr. Jitendra K. Sinha"
            title="NeuroScientist"
            handle="jksinha"
            status=""
            contactText="Contact Me"
            avatarUrl="/images/jks.jpg"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log('Contact clicked')}
          />
          <h1 className="name">Dr. Jitendra K. Sinha</h1>
          <p className="title">Neuroscientist</p>
        </div>

        <button className="info_more-btn" onClick={() => setShowContacts(!showContacts)}>
          <span>Show Contacts</span>
          <IonIcon icon={chevronDown} />
        </button>
      </div>

      {showContacts && (
        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <IonIcon icon={mailOutline} />
              </div>
              <div className="contact-info">
                <p className="contact-title">Email</p>
                <a href="mailto:your@email.com" className="contact-link">your@email.com</a>
              </div>
            </li>
          </ul>

          <div className="separator"></div>

          <ul className="social-list">
            <li className="social-item">
              <a href="#" className="social-link">
                <IonIcon icon={logoLinkedin} />
              </a>
            </li>
            <li className="social-item">
              <a href="#" className="social-link">
                <IonIcon icon={logoGithub} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </aside>
  )
}