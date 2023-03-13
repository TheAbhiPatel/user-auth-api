import express, { urlencoded } from "express";
import mongoose from "mongoose";
import cors from "cors";
import createHttpError from "http-errors";

import { MONGO_URL, PORT } from "./config";
import router from "./routes";
import { errorHandler } from "./middleware/errorHandler";

const app = express();
app.use(express.json());
// app.use((express.urlencoded({extended:true})))
app.use(cors());

// routes setup ---
app.use("/api", router);

app.get("/", (req, res) => {
  res.json({ message: "hello form the other side " });
});

// app.use((req, res, next) => {
//     next(Error("Route not found"))
// })

app.use(() => {
  throw createHttpError(404, "Route Not Found");
});

app.use(errorHandler);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("DataBase connected Successfully");
    app.listen(PORT, () => {
      console.log(`server is running at : http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
 