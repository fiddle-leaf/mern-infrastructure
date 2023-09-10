import { getToken } from "./users-service";
// base path of the Express route
const BASE_URL = "/api/users";

async function sendRequest(url, method = "GET", payload = null) {
  // Fetch accepts options obj as 2nd argument
  // includes data payload, set headers, etc
  const options = { method };

  if (payload) {
    options.headers = { "Content-Type": "application/json" };
    options.body = JSON.stringify(payload);
  }

  const token = getToken();
  if (token) {
    options.headers = options.headers || {};
    options.headers.Authorizations = `Bearer ${token}`;
  }

  const res = await fetch(url, options);
  if (res.ok) return res.json();
  throw new Error("Bad Request");
}

// -- Requests --

export function signUp(userData) {
  return sendRequest(BASE_URL, "POST", userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, "POST", credentials);
}

export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}
