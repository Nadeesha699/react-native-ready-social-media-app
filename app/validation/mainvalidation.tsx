import {
  emailRegex,
  nameRegex,
  passswordRegex,
  phoneNumberRegex,
} from "../components/components";

export const emailValidation = (email: string) => {
  if (emailRegex.test(email)) {
    return true;
  } else {
    return false;
  }
};

export const nameValidation = (name: string) => {
  if (nameRegex.test(name)) {
    return true;
  } else {
    return false;
  }
};

export const contactValidation = (cnumber: string) => {
  if (phoneNumberRegex.test(cnumber)) {
    return true;
  } else {
    return false;
  }
};

export const passwordValidation = (password: string) => {
  if (passswordRegex.test(password)) {
    return true;
  } else {
    return false;
  }
};
