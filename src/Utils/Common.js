// return the user data from the session storage
export const getUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);
  else return null;
};

// return the token from the session storage
export const getToken = () => {
  return localStorage.getItem("token");
};

// remove the token and user from the session storage
export const removeUserSession = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

// set the token and user from the session storage
export const setUserSession = token => {
  localStorage.setItem("token", token);
  //sessionStorage.setItem("user", JSON.stringify(user));
};

export const setUser = user => {
  localStorage.setItem("user", user);
};
