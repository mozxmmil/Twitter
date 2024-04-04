import jwt from "jsonwebtoken";

export const jwtTokenMaker = (id) => {
  return jwt.sign({ id }, process.env.JWTTOKEN, {
    expiresIn: process.env.JWTTOKENEXPIRE,
  });
};
export const jwtchecker = (token, key) => {
  return jwt.verify(token, key);
};
