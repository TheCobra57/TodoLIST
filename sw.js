// sw.js - minimal service worker for notifications
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(clients.claim()));

// Listen for messages from the main page to show a notification
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
    const { title, body } = event.data;
    self.registration.showNotification(title, {
      body: body,
      icon: 'data:image/svg+xml,...', // You can use the same icon data URI from your app
      badge: 'data:image/svg+xml,...'
    });
  }
});
