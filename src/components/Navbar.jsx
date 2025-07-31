// components/Navbar.jsx
export default function Navbar({ activePage, setActivePage }) {
  const pages = [
    { id: 'about', name: 'About' },
    { id: 'resume', name: 'Resume' },
    { id: 'portfolio', name: 'Portfolio' },
    { id: 'contact', name: 'Contact' }
  ]

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {pages.map(page => (
          <li key={page.id} className="navbar-item">
            <button 
              className={`navbar-link ${activePage === page.id ? 'active' : ''}`}
              onClick={() => setActivePage(page.id)}
            >
              {page.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}