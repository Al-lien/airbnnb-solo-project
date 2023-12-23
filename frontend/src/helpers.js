// check nothing
export function testing(str) {
  console.log(str);
}

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
