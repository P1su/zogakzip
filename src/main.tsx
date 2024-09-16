import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import Styles from './styles/index.tsx';

createRoot(document.getElementById('root')!).render(
  <Styles>
    <App />
  </Styles>
)
