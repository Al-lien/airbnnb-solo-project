import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthContextProvider } from "./contexts/AuthContext.jsx";
import { ParentContextProvider } from "./contexts/ParentContext.jsx";
import { ChildContextProvider } from "./contexts/ChildContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ParentContextProvider>
        <ChildContextProvider>
          <App />
        </ChildContextProvider>
      </ParentContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
