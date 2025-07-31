// App.jsx
import { useState } from 'react'
import './App.css'
import './style.css'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
function App() {
  const [activePage, setActivePage] = useState('about')

  return (
    <main>
      <Sidebar />
      <MainContent activePage={activePage} setActivePage={setActivePage} />
    </main>
  )
}

export default App