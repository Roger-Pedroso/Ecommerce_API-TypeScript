import { Router } from "express";
import OrderController from "../controllers/OrderController";

const routes = Router();

routes.post("/", OrderController.create);
routes.get("/", OrderController.find);
routes.get("/:id", OrderController.findById);
routes.delete("/:id", OrderController.delete);
routes.get("/cliente/:id", OrderController.findByClientId);
routes.get("/estoque-produto/:id", OrderController.findByProductAmount);

export default routes;
