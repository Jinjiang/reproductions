import { createRoot, hydrateRoot } from 'react-dom/client';
import './index.css'
import App from './App';

const root = document.getElementById('root');

if (import.meta.env.SSR) {
  hydrateRoot(root!, (<App />));
}
else {
  createRoot(root!).render(<App />);
}