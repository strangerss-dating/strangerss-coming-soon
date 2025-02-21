import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAY7We06bGfqT2T3mOWDYFU2N_BPsBW6SY",
    authDomain: "strangerss-coming-soon.firebaseapp.com",
    projectId: "strangerss-coming-soon",
    storageBucket: "strangerss-coming-soon.firebasestorage.app",
    messagingSenderId: "991336639315",
    appId: "1:991336639315:web:f3e25a395132b8a7788fa6",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics();
const db = getFirestore(app);

initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider('6LfLKN4qAAAAAChdysaeKJmVb-sCvrCAVClgKJ9Q'),

    // Optional argument. If true, the SDK automatically refreshes App Check
    // tokens as needed.
    isTokenAutoRefreshEnabled: true
});

export { analytics, db };