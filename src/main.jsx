import { createRoot } from "react-dom/client";
import Router from "./router.jsx";
import "./index.css";
import AuthProvider from "./contexts/auth.context.jsx";
import { MoviesProvider } from "./contexts/movies.context.jsx";
import TanstackQueryProvider from "./tanStackQuery/client.jsx";

createRoot(document.getElementById("root")).render(
  <TanstackQueryProvider>
    <AuthProvider>
      <MoviesProvider>
        <Router />
      </MoviesProvider>
    </AuthProvider>
  </TanstackQueryProvider>
);
