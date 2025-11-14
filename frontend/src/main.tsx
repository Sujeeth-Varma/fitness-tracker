import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/auth/login",
    Component: Login,
  },
  {
    path: "/auth/signup",
    Component: Signup,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router}></RouterProvider>
);
