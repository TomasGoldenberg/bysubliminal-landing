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

export const postNewMeetingScheduled = (calendlyEvent) => {
  const newMeetingKey = firebase.database().ref().child('meetings').push().key;
  const { invitee, event } = calendlyEvent.data.payload;

  // add ip
  const newMeetingData = {
    created_at: new Date().getTime(),
    event: event.uri,
    invitee: invitee.uri
  };

  const updates = {};
  updates[`/meetings/${newMeetingKey}`] = newMeetingData;

  return firebase.database().ref().update(updates);
};
