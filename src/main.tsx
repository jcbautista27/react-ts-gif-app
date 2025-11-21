import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GitApp } from './GitApp'
// import { MyCounterApp } from './counter/components/MyCounterApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GitApp />
    {/*<MyCounterApp />*/}
  </StrictMode>,
)
