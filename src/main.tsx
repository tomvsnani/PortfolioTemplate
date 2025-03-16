import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RouterProvider } from "react-router";
import { Routes } from "./Components/Routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div>
    <div className="container d-flex justify-content-center align-items-center flex-column">
    <RouterProvider router={Routes()}></RouterProvider>
    </div>
    </div>
  </StrictMode>
);
