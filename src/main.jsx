import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layouts/Main.jsx";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
  {
    element: <Main />,
    children: [
      {
        path: "/patrick-and-joan/",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
