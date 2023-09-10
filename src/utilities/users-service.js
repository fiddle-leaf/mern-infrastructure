import * as usersAPI from "./users-api";

export async function signUp(userData) {
  // delegate the network request code to users-api.js API module
  // return JSON web token
  const token = await usersAPI.signUp(userData);
  return token;
}
