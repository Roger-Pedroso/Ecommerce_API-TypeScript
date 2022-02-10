import { Router } from "express";
import ProdutoController from "../controllers/ProdutoController";

const routes = Router();

routes.post("/", ProdutoController.create);
routes.get("/", ProdutoController.find);
routes.get("/:id", ProdutoController.findOne);
routes.put("/:id", ProdutoController.save);
routes.delete("/:id", ProdutoController.delete);
routes.get("/estoque/:id", ProdutoController.findProduct);

export default routes;
