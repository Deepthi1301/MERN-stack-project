import firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyD-ys5t2PTOntAiO17b4b-Octj8bHyKviY",
	authDomain: "quiz-app-2b06d.firebaseapp.com",
	databaseURL: "https://quiz-app-2b06d-default-rtdb.firebaseio.com",
	projectId: "quiz-app-2b06d",
	storageBucket: "quiz-app-2b06d.appspot.com",
	messagingSenderId: "238712711936",
	appId: "1:238712711936:web:95a2c1b232ae3a4e5f21e5",
	measurementId: "G-M371H40P8Q"
  };
  
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth()

export default firebase;

