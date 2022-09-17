import dotenv from "dotenv";

dotenv.config();

const config = {
  mongodbURL: process.env.MONGODB_URI,
  port: process.env.PORT,
};

export default config;
