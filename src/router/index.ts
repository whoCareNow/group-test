// router/index.js
import { lazy } from "react";
const Index = lazy(() => import("../page/Index"));
const About = lazy(() => import("../page/About"));
/* import Index from "../page/Index"; */
/* import About from "../page/About"; */
const routes = [
  {
    path: "/",
    component: Index,
  },
  {
    path: "/about",
    component: About,
  },
];

export default routes;
