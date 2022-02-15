import { useState } from "react";
import "./App.css";

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function App() {
  const [antic, setAntic] = useState(0);
  const [operacio, SetOperacio] = useState("");
  const [novaEntrada, setNovaEntrada] = useState(false);
  const [display, setDisplay] = useState(0);
  const entraNumero = (numero) => {
    if (novaEntrada) setDisplay(numero);
    else setDisplay(display * 10 + numero);
    setNovaEntrada(false);
  };

  const entraOperacio = (operacio) => {
    setNovaEntrada(true);
    setAntic(display);
    if (!novaEntrada) calcular();
    SetOperacio(operacio);
  };

  const calcular = () => {
    if (operacio === "+") setDisplay(antic + display);
    if (operacio === "-") setDisplay(antic - display);
  };

  return (
    <div className="calculadora">
      <div className="display">{display}</div>
      <div className="numeros">
        {numeros.map((numero) => (
          <button className="boton-numero" onClick={() => entraNumero(numero)}>
            {numero}
          </button>
        ))}
      </div>

      <button onClick={() => entraOperacio("+")}>+</button>
      <button onClick={() => entraOperacio("-")}>-</button>
      <button onClick={calcular}>=</button>
    </div>
  );
}
export default App;

/*   NOTA: en el video david cambia las classes como le sale de las narices no fijarse en las clases de los botones
más que nada tener en cuenta la lógica el css lo podemos poner como nos venga
bien , hay que tener en cuenta de utilizar el flex, y el flex-wrap para pòder
alinear los numeros en la pantalla.  */
