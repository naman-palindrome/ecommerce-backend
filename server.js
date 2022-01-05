  import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import colors from "colors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";
const app = express();

dotenv.config();
connectDB();

app.use(cors());
app.use("/api/products", productRoutes);
app.get("/", (req, res) => {
  res.send("api is running ");
});
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server running on port ${PORT}`.yellow.bold));
