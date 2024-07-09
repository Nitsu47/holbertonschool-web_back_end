import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName)
    .then((value) => ({
      status: 'fulfilled',
      value,
    }))
    .catch((err) => ({
      status: 'rejected',
      value: err,
    }));

  const photoPromise = uploadPhoto(fileName)
    .then((value) => ({
      status: 'fulfilled',
      value,
    }))
    .catch((err) => ({
      status: 'rejected',
      value: err,
    }));
  return Promise.all([userPromise, photoPromise]);
}
