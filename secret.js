import dotenv from "dotenv";

dotenv.config({ path: ".env" });


export const EMAIL = process.env.EMAIL 
export const EMAIL_PASS = process.env.EMAIL_PASS 
export const EMAIL_PORT = process.env.EMAIL_PORT 

