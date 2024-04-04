import bcrypt from "bcrypt";
export const passwordhash = (password)=>{
  return bcrypt.hash(password,10)
}
export const passwordcompare = (password,hash)=>{
    return bcrypt.compare(password,hash)
}