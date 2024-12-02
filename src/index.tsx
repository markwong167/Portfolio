import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase.config";
initializeApp(firebaseConfig);

const root = document.getElementById("root");
if (!root) throw new Error("Root element not found");
createRoot(root).render(<App />);
