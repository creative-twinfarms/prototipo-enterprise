import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import PerfilPage from "./pages/PerfilPage";
import ProductoresPage from "./pages/ProductoresPage";
import ProductorPerfilPage from "./pages/ProductorPerfilPage";
import MapaPage from "./pages/MapaPage";
import DashboardPage from "./pages/DashboardPage";
import InventarioPage from "./pages/InventarioPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: ProductoresPage },
      { path: "perfil", Component: PerfilPage },
      { path: "productores", Component: ProductoresPage },
      { path: "productores/:id", Component: ProductorPerfilPage },
      { path: "mapa", Component: MapaPage },
      { path: "dashboard", Component: DashboardPage },
      { path: "inventario", Component: InventarioPage },
    ],
  },
]);