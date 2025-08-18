// components/Sidebar.jsx
import { useState } from 'react'
import { IonIcon } from '@ionic/react'
import { mailOutline, logoLinkedin } from 'ionicons/icons'
import ProfileCard from './ProfileCard/ProfileCard'

import TextType from './TextType/TextType'

import { FaGoogleScholar } from "react-icons/fa6";
import { SiScopus } from "react-icons/si";
import { FaOrcid } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

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
            enableMobileTilt={true}
            onContactClick={() =>
              window.location.href = "mailto:jksinha.hi@gmail.com?subject=Hello&body=I%20wanted%20to%20contact%20you regarding..."
            }
          />

          <br />
          <TextType
            text={["Hello!👋", "How are you doing?", "Welcome to my Profile!"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="█"
          />
          <br />
          <br />
          <div className='align-force'>
            <ul className="social-list">
              <li className="social-item">
                <a href="mailto:jksinha.hi@gmail.com" className="social-link">
                  <BiLogoGmail />
                </a>
              </li>
              <li className="social-item">
                <a href="https://www.linkedin.com/in/drjitendrakumarsinha/" className="social-link" target='_blank'>
                  <IonIcon icon={logoLinkedin} />
                </a>
              </li>
              <li className="social-item">
                <a href="https://scholar.google.com/citations?user=9OkrGBwAAAAJ&hl=en&oi=ao" className="social-link" target="_blank">
                  <FaGoogleScholar />
                </a>
              </li>
              <li className="social-item">
                <a href="https://www.scopus.com/authid/detail.uri?authorId=35800399200" className="social-link" target="_blank">
                  <SiScopus />
                </a>
              </li>
              <li className="social-item">
                <a href="https://orcid.org/0000-0002-7444-6932" className="social-link" target="_blank">
                  <FaOrcid />
                </a>
              </li>
            </ul>
          </div>
        </div>


      </div>




    </aside>
  )
}