import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import AuthProviders from "./components/Providers/AuthProviders";
import { router } from "./routes/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
    <div className="font-mono">
      <React.StrictMode>
      <AuthProviders>
        <RouterProvider router={router} />
      </AuthProviders>
    </React.StrictMode>
    </div>
);
