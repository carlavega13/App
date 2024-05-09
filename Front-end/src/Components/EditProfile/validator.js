import { notifyError } from "../../ToastNotification/toast";
const validator = (info, firstEdit) => {
  const nroRegex = /^(\+[0-9]{1,3}|[0-9]{1,4})\s?[0-9]{6,14}$/;
  const passRegex = /^(?=.*[A-Z])(?=.*[0-9]).{6,}$/;
  const error={
    firstname: "",
    lastname: "",
    phone: "",
    password: "",
    confirmpassword: "",
  }
  if (firstEdit) {
    if (!info.firstname || info.firstname <= 1) {
      error.firstname= "El nombre no puede estar vacio ni tener 1 sola letra."
      // notifyError("El nombre no puede estar vacio ni tener 1 sola letra.");
    }
    if (!info.lastname || info.lastname <= 1) {
        error.lastname= "El apellido no puede estar vacio ni tener 1 sola letra."

      // notifyError("El apellido no puede estar vacio ni tener 1 sola letra.");
    }
    if (!nroRegex.test(info.phone)) {
        error.phone= "El formato de celular no es correcto."

      // notifyError("El formato de celular no es correcto.");
    }
  }

  if (info.password&&!passRegex.test(info.password)) {
      error.password= "La contraseña debe tener al menos 6 caracteres, incluyendo al menos una letra mayúscula y un número."
    // notifyError(
    //   "La contraseña debe tener al menos 6 caracteres, incluyendo al menos una letra mayúscula y un número."
    // );
  }
  if (info.password !== info.confirmpassword) {
      error.confirmpassword="Las contraseñas no coinciden."
    // notifyError("Las contraseñas no coinciden.");
  }
  return error
};
export default validator;
