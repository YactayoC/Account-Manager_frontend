export const showPassword = () => {
  const showPass = document.getElementById('password');
  showPass?.setAttribute('type', 'text');
};

export const hidePassword = () => {
  const showPass = document.getElementById('password');
  showPass?.setAttribute('type', 'password');
};
