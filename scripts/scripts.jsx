import { useState } from "react";

export const imgs = () => {
  return "@/assets/images/6333050.jpg";
};

export const variables = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [contactno, setContactNo] = useState("");
  const [emailShow, setEmailShow] = useState(false);
  const [passwordShow, setPasswordShow] = useState(false);
  const [usernameShow, setUserNameShow] = useState(false);
  const [conatctnoShow, setContactNoShow] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [passwordSuccess, setPasswordSuccess] = useState(false);
  const [usernameSuccess, setUserNameSuccess] = useState(false);
  const [conatctnoSuccess, setContactNoSuccess] = useState(false);
  const [passwordEye, setPasswordEye] = useState(false);

  return {
    email,
    setEmail,
    password,
    setPassword,
    username,
    setUserName,
    contactno,
    setContactNo,
    usernameShow,
    setUserNameShow,
    emailShow,
    setEmailShow,
    conatctnoShow,
    setContactNoShow,
    usernameSuccess,
    setUserNameSuccess,
    conatctnoSuccess,
    setContactNoSuccess,
    emailShow,
    setEmailShow,
    passwordShow,
    setPasswordShow,
    emailSuccess,
    setEmailSuccess,
    passwordSuccess,
    setPasswordSuccess,
    passwordEye,
    setPasswordEye,
  };
};

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
