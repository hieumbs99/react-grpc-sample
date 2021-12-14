// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyDGPhfUxRm5Vi3LpzxtK77k-n73k6XnNNI",
    authDomain: "mbs-securities.firebaseapp.com",
    databaseURL: "https://mbs-securities.firebaseio.com",
    projectId: "mbs-securities",
    storageBucket: "mbs-securities.appspot.com",
    messagingSenderId: "877028310465",
    appId: "1:877028310465:web:0f1f10b7b0f664a6fa0340",
    measurementId: "G-94YTWJX2KP",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  // self.registration.showNotification(notificationTitle,
  //   notificationOptions);
});




// đây là nơi CSS cho cái thông báo