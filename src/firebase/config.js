import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyAxw_ydR8JrenIgFIT_8DEKX-XSZd3kq3A',
	authDomain: 'schedj-cbc46.firebaseapp.com',
	databaseURL: 'https://schedj-cbc46.firebaseio.com',
	projectId: 'schedj-cbc46',
	storageBucket: 'schedj-cbc46.appspot.com',
	messagingSenderId: '451988281664',
	appId: '1:451988281664:web:88e1b910531a0a7c1602a5',
	measurementId: 'G-KV69J37GDS',
};

// Initialize Firebase
export const firebaseInit = () => {
	firebase.initializeApp(firebaseConfig);
};

export const addProjectToDb = (uid, project) => {
	firebase
		.database()
		.ref('projects/' + project.id)
		.set({
			uid: uid,
			id: project.id,
			name: project.name,
			participants: project.participants,
			minForMeeting: project.minForMeeting,
			reminder: project.reminder,
			notes: project.notes,
		});
};

export const getAllProjectsFromDb = (uid, projects, addProject) => {
	const ref = firebase.database().ref('projects/');
	ref.once('value', (snapshot) => {
		snapshot.forEach((childSnapShot) => {
			const isExsitInState =
				projects.find((project) => project.id == childSnapShot.child('id').val()) == null ? false : true;
			childSnapShot.child('uid').val() == uid && !isExsitInState ? addProject(childSnapShot.val()) : null;
		});
	});
};
