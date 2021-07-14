import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
 apiKey: "AIzaSyBM0sy_u-3E0dkVi26NsJZLdp1TJecLdbw",
 authDomain: "tute-vue.firebaseapp.com",
 databaseURL: "https://tute-vue.firebaseio.com",
 projectId: "tute-vue",
 storageBucket: "tute-vue.appspot.com",
 messagingSenderId: "508090069290",
};

firebase.initializeApp(config)

export default firebase