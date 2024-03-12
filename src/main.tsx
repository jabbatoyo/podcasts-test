import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createAppRouter } from "./routes/index.tsx";

//styles
import "./main.css";
import { Layout } from "./components/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider fallbackElement={<Layout />} router={createAppRouter()} />
  </React.StrictMode>
);
