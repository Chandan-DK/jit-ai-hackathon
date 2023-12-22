// public/sw.js

// eslint-disable-next-line no-restricted-globals
self.addEventListener("push", (event) => {
  const options = {
    body: event.data.text(),
    icon: "path-to-your-icon.png",
    badge: "path-to-your-badge.png",
  };

  // eslint-disable-next-line no-restricted-globals
  event.waitUntil(self.registration.showNotification("My App", options));
});
