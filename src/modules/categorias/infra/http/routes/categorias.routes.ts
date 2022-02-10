import { Router } from "express";
import CategoriasController from "../controllers/CategoriasController";

const routes = Router();

routes.post("/", CategoriasController.create);
routes.get("/", CategoriasController.find);
routes.get("/:id", CategoriasController.findOne);
routes.put("/:id", CategoriasController.save);
routes.delete("/:id", CategoriasController.delete);

export default routes;
