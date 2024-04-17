import { ApiError } from "../utils/apierror.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { jwtchecker } from "../utils/jwtToken.js";

const Middlerware = asyncHandler(async (req, res, next) => {
  const token =
    req.cookies?.token || req.headers.authorization?.replace("Bearer ", "");

  if (!token) throw new ApiError(401, "Please login ");

  const tokenverification = jwtchecker(token, process.env.JWTTOKEN);

  if (!tokenverification) throw new ApiError(401, "token is invalid");

  req.user = tokenverification.id;

  next();
});

export { Middlerware };
