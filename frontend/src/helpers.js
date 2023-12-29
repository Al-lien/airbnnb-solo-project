// Keep you waiting
export const waaait = () =>
  new Promise((res) => setTimeout(res, Math.random() * 800));

// check if input email match pattern
export function checkEmailFormat(email) {
  const validEmailRegex = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  if (validEmailRegex.test(email)) {
    return true;
  }
}

// check if input passwords are the same && match pattern
export function checkPasswordMatch(firstPassword, secondPassword) {
  if (
    firstPassword.length >= 8 &&
    /[A-Z]/.test(firstPassword) &&
    /[0-9]/.test(firstPassword) &&
    /[!@#$%^&*(),.?":{}|<>]/.test(firstPassword) &&
    (firstPassword !== "" || secondPassword !== "") &&
    firstPassword === secondPassword
  ) {
    return true;
  }
}

// add or delete user from localstorage
export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

// fetch user ID
export const fetchUser = async (user) => {
  const response = await fetch("http://localhost:4000/api/user/");
  const json = await response.json();
  const currentUser = await json.find(
    (currentUser) => currentUser.email === user.email
  );
  return currentUser._id;
};


// fetch parent 
export const fetchParent = async () => {
  const response = await fetch("http://localhost:4000/api/parents/");
  const json = await response.json();
  return json;
};