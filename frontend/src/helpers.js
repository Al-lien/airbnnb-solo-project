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

// check if input passwords are the same
export function checkPasswordMatch(firstPassword, secondPassword) {
  if (
    (firstPassword !== "" || secondPassword !== "") &&
    firstPassword === secondPassword
  ) {
    return true;
  }
}
