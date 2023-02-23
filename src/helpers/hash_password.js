
const CryptoJS = require("crypto-js");

const hashPassword = async (password) => {
    const hashing_password = await CryptoJS.SHA256('cavidan123');
    return hashing_password.toString();
}

hashPassword('cavidan123');

module.exports = {
    hashPassword
}