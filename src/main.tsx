import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Nav from "./components/NavBar";
import DarkModeButton from "./components/DarkModeButton";
import "./index.css";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

createRoot(rootElement).render(
  <StrictMode>
    <Nav></Nav>
    <App />
    <DarkModeButton />
  </StrictMode>
);
