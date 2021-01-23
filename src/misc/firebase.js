import firebase from 'firebase/app';

const config = {
  apiKey: 'AIzaSyAJj7yhlbspR0bwe7kSbIYVvwpj2DA1BG0',
  authDomain: 'chat-app-e9d9d.firebaseapp.com',
  databaseURL: 'https://chat-app-e9d9d.firebaseio.com',
  projectId: 'chat-app-e9d9d',
  storageBucket: 'chat-app-e9d9d.appspot.com',
  messagingSenderId: '929959781903',
  appId: '1:929959781903:web:d5b51ee41e71f67e43257a',
};

const app = firebase.initializeApp(config);
