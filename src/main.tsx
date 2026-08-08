import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n'

// Handle chunk/preload errors (commonly caused by new deployments deleting old hashed chunk files)
const handleChunkError = (error: any) => {
  const isChunkError = 
    error && (
      (error.message && error.message.includes('Failed to fetch dynamically imported module')) ||
      (error.message && error.message.toLowerCase().includes('chunkloaderror')) ||
      (error.name && error.name.includes('ChunkLoadError'))
    );

  if (isChunkError) {
    const reloadKey = 'chunk-load-reload-attempted';
    const lastAttempt = sessionStorage.getItem(reloadKey);
    const now = Date.now();

    // Prevent infinite reload loop (limit to 1 reload per 10 seconds)
    if (!lastAttempt || now - parseInt(lastAttempt, 10) > 10000) {
      sessionStorage.setItem(reloadKey, now.toString());
      console.warn('ChunkLoadError detected, reloading page to fetch latest assets...');
      window.location.reload();
    } else {
      console.error('ChunkLoadError occurred repeatedly. Server might be down or file is missing.');
    }
  }
};

// Catch Vite-specific preload errors
window.addEventListener('vite:preloadError', (event) => {
  event.preventDefault();
  const reloadKey = 'chunk-load-reload-attempted';
  const lastAttempt = sessionStorage.getItem(reloadKey);
  const now = Date.now();

  if (!lastAttempt || now - parseInt(lastAttempt, 10) > 10000) {
    sessionStorage.setItem(reloadKey, now.toString());
    console.warn('Vite preload error detected, reloading page to fetch latest assets...', event);
    window.location.reload();
  } else {
    console.error('Vite preload error occurred repeatedly.', event);
  }
});

// Catch standard global chunk loading errors
window.addEventListener('error', (event) => {
  handleChunkError(event.error || event);
}, true);

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
