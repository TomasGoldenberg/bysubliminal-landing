// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: 'AIzaSyBRQ56dyzvgxbizLZNMiZYnui5sP_i9Mhs',
  authDomain: 'bysubliminal-d5f66.firebaseapp.com',
  databaseURL: 'https://bysubliminal-d5f66-default-rtdb.firebaseio.com',
  projectId: 'bysubliminal-d5f66',
  storageBucket: 'bysubliminal-d5f66.appspot.com',
  messagingSenderId: '1030330233104',
  appId: '1:1030330233104:web:cb7c1d76ad27083d847595',
  measurementId: 'G-MR50DFGTHT'
};

export const cloudinaryConfig = {
  cloudinaryKey: process.env.REACT_APP_CLOUDINARY_KEY,
  cloudinaryPreset: process.env.REACT_APP_CLOUDINARY_PRESET,
  cloudinaryUrl: process.env.REACT_APP_CLOUDINARY_URL
};

export const mapConfig = process.env.REACT_APP_MAP_MAPBOX;
export const googleAnalyticsConfig = process.env.REACT_APP_GA_MEASUREMENT_ID;
