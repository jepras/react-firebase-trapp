import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyAefOw2kBbbf-nhiBr-tyuJynZ9a4AkUow',
  authDomain: 'teamreportingapp.firebaseapp.com',
  databaseURL: 'https://teamreportingapp.firebaseio.com',
  projectId: 'teamreportingapp',
  storageBucket: '',
  messagingSenderId: '135211953484'
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
