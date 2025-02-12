const PATTERNS = {
  alphabets: /^[a-zA-Z]+$/,
  alphabetSpace: /^[a-zA-Z ]+$/,
  alphaNumeric: /^[0-9a-zA-Z ]+$/,
  numeric: /^[d.]+$/,
  any: /^.+$/,
  multiplePhoneNumbers: /^[0-9 ,]+$/,

  pincode: /^([1-9]){1}([0-9]){5}$/,
  aadhaar: /^([1-9]){1}([0-9]){11}$/,
  mobile: /^([1-9]){1}([0-9]){9}$/,
  email:
    /^[_A-Za-z0-9-.]+(.[_A-Za-z0-9-.]+)@[A-Za-z0-9]+(.[A-Za-z0-9]+)(.[A-Za-z]{2,})$/,
  dateTime: /^d{4}-d{2}-d{2}Td{2}:d{2}$/,
  date: /^([1-9]){1}([0-9]){3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/,
  time: /^(1[0-2]|0?[1-9]):[0-5][0-9] (AM|PM)$/,
  gstin:
    /^([0-9]{2})([A-Z]{5})([0-9]{4})([A-Z]{1})([0-9A-Z]{1})([Z]{1})([0-9A-Z]{1})$/,
  pan: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
  cin: /^[A-Z]{1}[0-9]{5}[A-Z]{2}[0-9]{4}[A-Z]{3}[0-9]{6}$/,
  accountNumber: /^[d]{10,15}$/,
  ifscCode: /[A-Za-z]{4}[0][w]{4,}$/,
  icon: /^[a-z -]+$/,
  vehicleRegistrationNumber: /[A-Za-z]{2}sd{2}s[A-Za-z]{0,3}sd{4}/,
};

export default PATTERNS;
