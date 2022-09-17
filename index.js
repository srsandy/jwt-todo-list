import express from "express";
import config from "./config.js";
import connectDb from "./services/database.js";
import todoRoutes from "./routes/todo.route.js";

const app = express();
app.use(express.json());

app.use("/todo", todoRoutes);

app.listen(config.port, () => {
  console.log(`Server started!! on port ${config.port}`);
  connectDb();
});
