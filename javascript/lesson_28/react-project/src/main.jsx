import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div>
      <h1>React з Vite</h1>
      <p>Це простий компонент React.</p>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
