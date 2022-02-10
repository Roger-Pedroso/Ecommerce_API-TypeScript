import clientsRoutes from "../../../../modules/clients/infra/http/routes/clients.routes";
import categoriasRoutes from "../../../../../src/modules/categorias/infra/http/routes/categorias.routes";
import produtosRoutes from "../../../../modules/produtos/infra/http/routes/produto.routes";
import orderRoutes from "../../../../modules/order/infra/http/routes/order.routes";

import { request, Request, Response, Router } from "express";
import { getRepository, Repository } from "typeorm";
const routes = Router();
routes.use("/clientes", clientsRoutes);
routes.use("/categorias", categoriasRoutes);
routes.use("/produto", produtosRoutes);
routes.use("/pedido", orderRoutes);
export default routes;
