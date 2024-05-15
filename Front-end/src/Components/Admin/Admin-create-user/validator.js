const validator = (info,flag) => {
  const nroRegex = /^(\+[0-9]{1,3}|[0-9]{1,4})\s?[0-9]{6,14}$/;
  const passRegex = /^(?=.*[A-Z])(?=.*[0-9]).{6,}$/;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const error = {
    flag:flag,
    email:"",
    firstname: "",
    lastname: "",
    phone: "",
    password: "",
    confirmpassword: "",
  };
  if (!regexEmail.test(info.email)) {
    error.email = "El email no es correcto.";
  }

  if (info.phone&&!nroRegex.test(info.phone)) {
    error.phone = "El formato de celular no es correcto.";
  }

  if ( !passRegex.test(info.password)) {
    error.password =
      "La contraseña debe tener al menos 6 caracteres, incluyendo al menos una letra mayúscula y un número.";
  }
  if (info.password !== info.confirmpassword) {
    error.confirmpassword = "Las contraseñas no coinciden.";
  }
  if(info.firstname&&info.firstname.length==1){
    error.firstname="El nombre no puede tener 1 letra"
  }
  if(info.lastname&&info.lastname.length==1){
    error.lastname="El apellido no puede tener 1 letra"
  }
  return error;
};
export default validator;
