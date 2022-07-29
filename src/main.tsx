import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
/* import "antd/dist/antd.css"; */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import routes from "./router";
createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense>
        <Routes>
          {routes.map(
            (route: {
              path: string;
              component: React.LazyExoticComponent<() => JSX.Element>;
            }) => (
              <Route
                path={route.path}
                key={route.path}
                element={<route.component />}
              />
            )
          )}
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
