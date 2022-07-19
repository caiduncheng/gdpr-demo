export function legalMobile(s) {
  return /^[0-9\\-]{8,16}$/.test(s);
}

export function isEmail(s) {
  return /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(
    s
  );
}

export function checkPhoneNum(rule, value, callback) {
  const phoneRegex = /^([0-9-]+)$/;
  if (!value) {
    callback();
  } else if (!phoneRegex.test(value)) {
    callback(
      new Error('Phone format error, it can only contain numbers and "-"')
    );
  } else {
    callback();
  }
}

export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path);
}
