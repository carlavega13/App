const validator = (info) => {
  const error = {
    password:"",
    confirmPassword:""
  };
  const passRegex = /^(?=.*[A-Z])(?=.*[0-9]).{6,}$/;
  if (!passRegex.test(info.password)) {
    error.password =
      "La contraseña debe tener al menos 6 caracteres, incluyendo al menos una letra mayúscula y un número.";
  }
  if (info.password !== info.confirmPassword) {
    error.confirmPassword = "Las contraseñas no coinciden.";
  }
  return error;
};
export default validator;
