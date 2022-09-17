import dotenv from "dotenv";

dotenv.config();

const config = {
  mongodbURL: process.env.MONGODB_URI,
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
};

export default config;
