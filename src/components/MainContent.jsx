// components/MainContent.jsx
import Navbar from './Navbar'
import About from '../pages/About'
import Resume from '../pages/Resume'
import Portfolio from '../pages/Portfolio'
import Contact from '../pages/Contact'

export default function MainContent({ activePage, setActivePage }) {
  return (
    <div className="main-content">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      
      {activePage === 'about' && <About />}
      {activePage === 'resume' && <Resume />}
      {activePage === 'portfolio' && <Portfolio />}
      {activePage === 'contact' && <Contact />}
    </div>
  )
}