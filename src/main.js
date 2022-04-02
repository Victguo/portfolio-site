import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjap8I03JeFoNa_NdUXMmJTfSjJGWzrrg",
  authDomain: "portfolio-site-6b8e4.firebaseapp.com",
  projectId: "portfolio-site-6b8e4",
  storageBucket: "portfolio-site-6b8e4.appspot.com",
  messagingSenderId: "1088480890036",
  appId: "1:1088480890036:web:6c57d3f91057e74ad0dbe1",
  measurementId: "G-3GP0MRB2W4"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
getStorage(firebaseApp);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
