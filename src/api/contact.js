import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

export const postContactMessage = async (company, email, description) => {
  const newMessageKey = firebase.database().ref().child('messages').push().key;

  const newMetric = {
    created_at: new Date().getTime(),
    company,
    email,
    description
  };

  const updates = {};
  updates[`/messages/${newMessageKey}`] = newMetric;

  return firebase.database().ref().update(updates);
};
