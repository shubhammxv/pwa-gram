var deferredPrompt;

if(!window.Promise) {
  window.Promise = Promise;
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')       // Takes second arg as { scope: '' }
  .then(() => {
    console.log("Service worker registered")
  })
  .catch((err) => {
    console.log("Error while registering")
  })
}

window.addEventListener('beforeinstallprompt', (event) => {
  console.log("Before Install Prompt triggered", event);
  event.preventDefault();
  deferredPrompt = event;
  return false;
})
