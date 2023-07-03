import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA4Xxpe50POx7egi4TDRUb8W5bEOpzyhBk",
  authDomain: "fanthomapp.firebaseapp.com",
  databaseURL: "https://fanthomapp-default-rtdb.firebaseio.com",
  projectId: "fanthomapp",
  storageBucket: "fanthomapp.appspot.com",
  messagingSenderId: "964047287685",
  appId: "1:964047287685:web:8ca167b5e1c27192a4c0ec"
};

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {firestore, storage, app}