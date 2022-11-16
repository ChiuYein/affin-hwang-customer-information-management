export const testMiddleWare = (_req, _res, next) => {
  try {
    //_req?.body?.token check the validity of the token
    console.log("testMiddleWare");
    next();
  } catch (error) {
    throw new Error("User not authorized");
  }
};