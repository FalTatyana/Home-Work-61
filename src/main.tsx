import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "../node_modules/bootstrap/scss/bootstrap";

createRoot(document.getElementById('root')!).render(<App />)
