import React, { useState } from "react";
import "./styles.css";

export default function Main() {
  const [degree, setDegree] = useState(0);
  const [unit, setUnit] = useState("celsius");
  const [result, setResult] = useState();
  const handleChange = (e) => {
    setDegree(parseInt(e.target.value));
  };

  const converter = () => {
    if (unit === "fahrenheit") {
      return setResult(((degree - 32) * 5) / 9 + "°C");
    } else {
      return setResult((degree * 9) / 5 + 32 + "°F");
    }
  };

  //El estado siempre representa el valor del Input (componente controlado)

  return (
    <section className="degree-card">
      <div className="inputs">
        <div className="degrees">
          <label>
            Degrees
            <input
              className="number"
              type="number"
              name=""
              value={degree}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="type">
          <label>
            Type
            <select
              value={unit}
              className="degree-options"
              onChange={(e) => {
                setUnit(e.target.value);
              }}
            >
              <option value="fahrenheit">Fahrenheit</option>
              <option value="celsius">Celsius</option>
            </select>
          </label>
        </div>

        <button className="convert-button" onClick={converter}>
          Convert
        </button>
      </div>

      <div className="results">
        <label>Result:</label>
        <h2>{result}</h2>
      </div>
    </section>
  );
}
