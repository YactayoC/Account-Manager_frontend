import validator from 'validator';

export const isValidFullname = (fullname: string | undefined): boolean => {
  const resp = validator.isAlpha(fullname!, 'es-ES', { ignore: ' ' });
  return !!resp;
};

export const isFullname = (fullname: string | undefined): string | undefined => {
  return isValidFullname(fullname) ? undefined : 'Not a valid fullname';
};
