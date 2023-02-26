
const CryptoJS = require("crypto-js");

const hashPassword = async (password) => {
    const hashing_password = await CryptoJS.SHA256(password);
    return hashing_password.toString();
}

module.exports = {
    hashPassword
}