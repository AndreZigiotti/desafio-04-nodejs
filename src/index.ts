import express from "express";
import { setup, serve } from "swagger-ui-express";

import { usersRoutes } from "./routes/users.routes";
import swagger from "./swagger.json";

const app = express();

app.use(express.json());

app.use("/api-docs", serve, setup(swagger));

app.use("/users", usersRoutes);

export { app };
