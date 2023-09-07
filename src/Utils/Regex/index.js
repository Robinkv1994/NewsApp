export const regex = {
    email_regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    // name_regex: /^[a-zA-Z][a-zA-Z\s]*$/,
    name_regex: /[a-zA-Z'.]$/,
    // mobile_regex: /^[0][1-9]\d{9}$|^[1-9]\d{9}$/,
    mobile_regex: /^\d{10,11}$/,
    landline_regex: /^[0-9]{10,12}$/,
    password_regex: /^.{8,}$/,
    // password_regex : /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, //Minimum eight characters, at least one letter and one number:
    //password_regex: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, //Minimum eight characters, at least one letter, one number and one special character:
    number_regex: /^[0-9]*$/,
    pincode_regex: /^\d{5}(?:[-\s]\d{4})?$/,
    reg: /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/, //Allow letters, numbers, and spaces (with at least one letter or number)
    uk_pincode_regex: /^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z])))) {0,1}[0-9][A-Za-z]{2})$/,
  }
  
  export const otherRegex = {
    uk_mobile: /^(07[\d]{8,12}|447[\d]{7,11})$/,
    uk_mobile_2: /^((\+44(\s\(0\)\s|\s0\s|\s)?)|0)7\d{3}(\s)?\d{6}$/,
  }