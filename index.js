import express from "express";
import config from "./config.js";
import connectDb from "./services/database.js";
import todoRoutes from "./routes/todo.route.js";
import authRoutes from "./routes/auth.route.js";

const app = express();
app.use(express.json());

app.use("/", authRoutes);
app.use("/todo", todoRoutes);

app.listen(config.port, () => {
  console.log(`Server started!! on port ${config.port}`);
  connectDb();
});
