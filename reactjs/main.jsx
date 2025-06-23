import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import Luffy from './luffy.jsx'
import Animelist from './animelist.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
   <Animelist />
   
  </StrictMode>
)
