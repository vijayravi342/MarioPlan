import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
	apiKey: 'AIzaSyB9ZMCkIPvIFawVm6tIasBql3ro0rn_uT8',
	authDomain: 'marioplan-d6f41.firebaseapp.com',
	databaseURL: 'https://marioplan-d6f41.firebaseio.com',
	projectId: 'marioplan-d6f41',
	storageBucket: 'marioplan-d6f41.appspot.com',
	messagingSenderId: '783975886194',
	appId: '1:783975886194:web:4aa24cd672453a279101eb'
};

firebase.initializeApp(config);
firebase.firestore().settings({ });

export default firebase;
