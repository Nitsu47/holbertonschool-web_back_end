import { uploadPhoto } from "./utils.js";
import { createUser } from "./utils.js";

export default function handleProfileSignup(){
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      const { body } = photoResponse;
      const { firstName, lastName } = userResponse;
      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => console.error('Signup system offline'));
}
