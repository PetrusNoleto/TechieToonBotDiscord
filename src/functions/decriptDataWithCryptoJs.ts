import CryptoJS from "crypto-js";
export const decriptDataWithCryptoJs = async (secretKey:string, dataToDecript:string) =>{
    const decriptData = CryptoJS.AES.decrypt(dataToDecript, secretKey).toString(CryptoJS.enc.Utf8);
    return(decriptData);
};