import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Profile from './components/Profile.jsx'
import App from './App.jsx'
import './index.css'
import './netflix.css'
import './SeriesCard.css'
import './components/Profile.css';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Profile/> */}
  </StrictMode>,
)
