import validator from 'validator';

export const isValidEmail = (email: string): boolean => {
  const resp = validator.isEmail(email);
  return !!resp;
};

export const isEmail = (email: string): string | undefined => {
  return isValidEmail(email) ? undefined : 'Not a valid email';
};
