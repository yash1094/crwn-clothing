import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: 'AIzaSyBVzrHJzm5C246ljmCUI-yGfY6k_P_cMf8',
  authDomain: 'crwn-db-5d297.firebaseapp.com',
  databaseURL: 'https://crwn-db-5d297.firebaseio.com',
  projectId: 'crwn-db-5d297',
  storageBucket: '',
  messagingSenderId: '364704929816',
  appId: '1:364704929816:web:8dfb36dbfed87969'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
