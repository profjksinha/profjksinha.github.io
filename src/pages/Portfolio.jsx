import { useState } from 'react'
import { IonIcon } from '@ionic/react'
import { eyeOutline } from 'ionicons/icons'
import { chevronDown } from 'ionicons/icons'


export default function Portfolio() {
  const [filter, setFilter] = useState('all')
  const [selectValue, setSelectValue] = useState('All')

  const projects = [
    {
      id: 1,
      title: "Project 1",
      category: "applications",
      image: "/project1.jpg"
    },
    // Add more projects
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <article className="portfolio" data-page="portfolio" style={{ display: 'block', color: 'black' }}>
      <br/><br/>
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          <li className="filter-item">
            <button 
              className={filter === 'all' ? 'active' : ''}
              onClick={() => setFilter('all')}
            >
              All
            </button>
          </li>
          <li className="filter-item">
            <button 
              className={filter === 'applications' ? 'active' : ''}
              onClick={() => setFilter('applications')}
            >
              Applications
            </button>
          </li>
          <li className="filter-item">
            <button 
              className={filter === 'web development' ? 'active' : ''}
              onClick={() => setFilter('web development')}
            >
              Web development
            </button>
          </li>
        </ul>

        <div className="filter-select-box">
          <button className="filter-select" data-select>
            <div className="select-value">{selectValue}</div>
            <div className="select-icon">
              <IonIcon icon={chevronDown} />
            </div>
          </button>
        </div>

        <ul className="project-list">
          {filteredProjects.map(project => (
            <li className="project-item" key={project.id}>
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <IonIcon icon={eyeOutline} />
                  </div>
                  <img src={project.image} alt={project.title} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}