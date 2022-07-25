import firestore from '@react-native-firebase/firestore';
export const noteCollectionRef = firestore().collection('notes');
