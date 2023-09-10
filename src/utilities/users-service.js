import * as usersAPI from "./users-api";

export function getToken() {
  const token = localStorage.getItem("token");

  //getItem returns null when no string
  if (!token) return null;

  //obtain payload of token
  const payload = JSON.parse(atob(token.split(".")[1]));

  //convert to seconds for JWT's exp
  if (payload.exp < Date.now() / 1000) {
    //token is removed if token expired
    localStorage.removeItem("token");
    return null;
  }
  return token;
}

export function getUser() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split(".")[1])).user : null;
}

export async function signUp(userData) {
  // delegate the network request code to users-api.js API module
  // return JSON web token
  const token = await usersAPI.signUp(userData);
  //Persist the "token"
  localStorage.setItem("token", token);

  return getUser();
}

export function logOut() {
  localStorage.removeItem("token");
}
