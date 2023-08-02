import { useState } from "react";
import "./App.css";

function App() {
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState("light"); // "light" | "dark"

  // Una funcion tiene 3 etapas
  // DECLARACIÓN donde la escribo (con o sin nombre) y con o sin parámetros
  // LLAMADO donde la llamo, donde le pongo paréntesis curvos, es decir, donde le digo que se ejecute y si preciso, le paso atributos. A VECES, NO LO HAGO A MANO, A VECES ALGO MAS LA LLAMA POR MI
  // EJECUCIÓN, cuando el codigo dentro se acciona, luego del llamado

  return (
    <main className={mode}>
      <h1>El componente principal</h1>
      {visible && (
        <div className="modal-overlay">
          <div className="modal">
            <button onClick={() => setVisible(false)}>X</button>
            <h1>Seleccionar Modo</h1>
            <h2>{mode}</h2>
            <button
              onClick={() => {
                setMode("light");
                setVisible(false);
              }}
            >
              Light
            </button>
            <button
              onClick={() => {
                setMode("dark");
                setVisible(false);
              }}
            >
              Dark
            </button>
            <button
              onClick={() => {
                setMode("colores-arcoiris");
                setVisible(false);
              }}
            >
              Arcoiris
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => {
          setVisible(true);
        }}
      >
        Abrir Modal
      </button>
    </main>
  );
}

export default App;
