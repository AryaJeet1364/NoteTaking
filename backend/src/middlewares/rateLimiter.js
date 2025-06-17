import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    // const { success } = await ratelimit.limit("my-rate-limit");
    // problem :
    //1. One user spams 100 requests → everyone else gets blocked.
    //2. 10 users make 10 requests → the 11th user's first request is blocked.
    //3. Legit traffic + 1 bad actor → entire app gets rate-limited.

    // Using a unique identifier per user/IP:
    const identifier = req.ip || req.headers["x-forwarded-for"] || "global";
    const { success } = await ratelimit.limit(identifier);

    if (!success) {
      return res.status(429).json({
        message: "Too many requests, please try again later",
      });
    }

    next();
  } catch (error) {
    console.log("Rate limiter middleware error: ", error);
    next(error);
  }
};

export default rateLimiter;
