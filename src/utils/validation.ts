// Utilidades de validación para formularios

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
};

export const validateRFC = (rfc: string): boolean => {
  // RFC para personas físicas (13 caracteres) o morales (12 caracteres)
  const rfcRegex = /^[A-ZÑ&]{3,4}[0-9]{6}[A-Z0-9]{3}$/;
  return rfcRegex.test(rfc.toUpperCase());
};

export const validateCP = (cp: string): boolean => {
  // Código postal mexicano (5 dígitos)
  const cpRegex = /^[0-9]{5}$/;
  return cpRegex.test(cp);
};

export const getEmailErrorMessage = (email: string): string => {
  if (!email) {
    return "El correo electrónico es obligatorio";
  }
  if (!validateEmail(email)) {
    return "Por favor ingresa un correo electrónico válido (ejemplo@dominio.com)";
  }
  return "";
};

export const getRequiredErrorMessage = (
  value: string,
  fieldName: string
): string => {
  if (!validateRequired(value)) {
    return `${fieldName} es obligatorio`;
  }
  return "";
};

export const getPhoneErrorMessage = (phone: string): string => {
  if (!phone) {
    return "El teléfono es obligatorio";
  }
  if (!validatePhone(phone)) {
    return "Por favor ingresa un teléfono válido (mínimo 10 dígitos)";
  }
  return "";
};

export const getRFCErrorMessage = (rfc: string): string => {
  if (!rfc) {
    return "El RFC es obligatorio";
  }
  if (!validateRFC(rfc)) {
    return "Por favor ingresa un RFC válido";
  }
  return "";
};

export const getCPErrorMessage = (cp: string): string => {
  if (!cp) {
    return "El código postal es obligatorio";
  }
  if (!validateCP(cp)) {
    return "Por favor ingresa un código postal válido (5 dígitos)";
  }
  return "";
};
