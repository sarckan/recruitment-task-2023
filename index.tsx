import * as React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { Layout } from "./model";
import { generateExampleLayout } from "./resources";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// generate an example layout for demonstration purposes
const layout: Layout = generateExampleLayout();

root.render(
  <StrictMode>
    <App layout={layout} />
  </StrictMode>
);
