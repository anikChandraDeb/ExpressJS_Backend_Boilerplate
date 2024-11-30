import {DecodeToken, EncodeToken} from "../utility/tokenUtility.js";
import EmailSend from "../utility/emailUtility.js";

export const TokenEncode=async (req,res)=>{
    let result = EncodeToken("anik.deb@gmail.com","123");
    res.json({"Token": result});
}

export const TokenDecode=async (req,res)=>{
    let result = DecodeToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuaWsuZGViQGdtYWlsLmNvbSIsInVzZXJfaWQiOiIxMjMiLCJpYXQiOjE3MzI5NzgyMTEsImV4cCI6MTczNTU3MDIxMX0.8IdJGhjvBAq84WFf1lLSNkOvBIQZ_EbOC8VP_USRmkA");
    res.json({"Decode-result":result});
}

export const Email=async (req,res)=>{
    let EmailTo="istiak2147@gmail.com,";
    let EmailText="Nothing";
    let EmailSubject="Read the important jocks";
    let EmailHTMLBody="স্যার: পরীক্ষার আগে কী করো? ছাত্র: প্রশ্নপত্র ফাঁসের জন্য প্রার্থনা।";
    let result= await EmailSend(EmailTo,EmailText,EmailSubject,EmailHTMLBody);
    res.json({"EmailStatus":result});
}