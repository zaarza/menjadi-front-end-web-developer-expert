import { Workbox } from 'workbox-window';

const ServiceWorker = () => {
  if (!('serviceWorker' in navigator)) {
    console.error('Browser does not support service worker');
    return;
  }

  const wb = new Workbox('/service-worker.js');

  try {
    wb.register();
  } catch {
    console.error('Failed to register service worker');
  }
};

export default ServiceWorker;
