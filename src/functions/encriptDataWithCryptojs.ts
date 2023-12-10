import CryptoJS from "crypto-js";


export const encriptDataWithCryptoJs = async (secretKey:string, dataToEncript:string) =>{
    const encriptData = CryptoJS.AES.encrypt(dataToEncript, secretKey).toString();
    return(encriptData);
};