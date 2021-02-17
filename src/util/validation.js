function sanitizeData(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].trim();
  }
  return arr;
}

function minMaxLength(str, min, max) {
  if (str.length === 0) {
    return `*Field cannot be empty.`;
  }

  if (str.length < min) {
    return `*Field must be atleast ${min} chars.`;
  }

  if (max && str.length > max) {
    return `*Field cannot exceed ${max} chars.`;
  }

  return "default";
}

function isEmail(str) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(str).toLowerCase()) ? "default" : "*Not an email";
}

module.exports = {
  sanitizeData,
  minMaxLength,
  isEmail,
};
