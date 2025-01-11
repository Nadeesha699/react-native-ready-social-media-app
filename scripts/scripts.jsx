export const validateEmail = (email) => {
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    return true;
  } else {
    return false;
  }
};

export const validatePassword = (password) => {
  if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
    return true;
  } else {
    return false;
  }
};

export const validateUserName = (username) => {
  if (!/^[a-zA-Z]+([ '-][a-zA-Z]+)*$/.test(username)) {
    return true;
  } else {
    return false;
  }
};

export const validateContactNO = (contactno) => {
  if (
    !/^\+?[0-9]{1,3}?[-. ]?(\(?\d{1,4}?\)?)[-. ]?\d{1,4}[-. ]?\d{1,4}[-. ]?\d{1,9}$/.test(
      contactno
    )
  ) {
    return true;
  } else {
    return false;
  }
};
