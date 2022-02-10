import { Router } from "express";
import ClientsController from "../controllers/ClientsController";

const routes = Router();

routes.post("/", ClientsController.create);
routes.get("/", ClientsController.find);
routes.get("/:id", ClientsController.findOne);
routes.put("/:id", ClientsController.save);
routes.delete("/:id", ClientsController.delete);

export default routes;
