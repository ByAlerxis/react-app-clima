importScripts("https://www.gstatic.com/firebasejs/9.18.0/firebase-app-compat.js")
importScripts("https://www.gstatic.com/firebasejs/9.18.0/firebase-messaging-compat.js")

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjWgGt12Dr9FJpwYIsw5hnI437hsGC42o",
  authDomain: "push-fb58b.firebaseapp.com",
  projectId: "push-fb58b",
  storageBucket: "push-fb58b.appspot.com",
  messagingSenderId: "1085054624526",
  appId: "1:1085054624526:web:72d105834fe2af3603ad5f"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app)


messaging.onBackgroundMessage(payload=>{
    console.log("Recibiste un mensaje mientras estabas ausente");
    console.log(payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: "./logo192.png"
    };

    return self.registration.showNotification(
        notificationTitle,
        notificationOptions
    )
})