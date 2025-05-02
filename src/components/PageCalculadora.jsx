import { ColoresMap, PatronMMap, PatronPMap } from "../Db/DbMut";
import {
  ColorComparison,
  PatronComparison,
  PatronPlumaComparison,
} from "../calc-genetica/geneticComparison";
import { useRef, useEffect, useState } from "react";

function PageCalculadora() {
  // Mutation macho
  const [colorM, setColorM] = useState("");
  const [patronM, setPatronM] = useState("");
  const [patronPlumaM, setPatronPlumaM] = useState("");

  // Mutation hembra
  const [colorH, setColorH] = useState("");
  const [patronH, setPatronH] = useState("");
  const [patronPlumaH, setPatronPlumaH] = useState("");

  const [mostrar, setMostrar] = useState(false);
  const contenedorRef = useRef(null);

  const [results, setResults] = useState([]);
  useEffect(() => {
    const clickOutside = (event) => {
      if (
        contenedorRef.current &&
        !contenedorRef.current.contains(event.target)
      ) {
        setMostrar(false);
      }
    };
    document.addEventListener("mousedown", clickOutside);
    return () => document.removeEventListener("mousedown", clickOutside);
  }, []);

  const calc = () => {
    if (
      colorM === "" ||
      colorH === "" ||
      patronM === "" ||
      patronH === "" ||
      patronPlumaM === "" ||
      patronPlumaH === ""
    ) {
      alert("Por favor, selecciona todas las opciones antes de calcular.");
      return;
    }
    const color = ColorComparison(colorM, colorH);
    const patron = PatronComparison(patronM, patronH);
    const patronPluma = PatronPlumaComparison(patronPlumaM, patronPlumaH);

    setResults([color, patron, patronPluma]);   
  };

  return (
    <div className="container ">
      <section className="container-calc  border">
        <h2 className="calc-title">Calculadora genética</h2>
        <div className="calc-macho">
          <h3 className="cont-macho">Macho</h3>

          <label className="calc-label" htmlFor="m-m-color">
            Mutacion color:
          </label>
          <select
            className="calc-color"
            name="seleciona un color"
            id="m-m-color"
            onChange={(e) => {
              setColorM(e.target.value);
            }}
          >
            <option className="opt-colores" value="">
              Select
            </option>
            {[...ColoresMap.entries()].map(([color], index) => (
              <option className="opt-colores" key={index} value={color}>
                {color}
              </option>
            ))}
          </select>

          <label className="calc-label" htmlFor="m-m-patron">
            Mutacion patron:
          </label>
          <select
            className="calc-patron"
            name="seleciona un patron"
            id="m-m-patron"
            onChange={(e) => {
              setPatronM(e.target.value);
            }}
          >
            <option className="opt-patrones" value="">
              Select
            </option>
            {[...PatronMMap.entries()].map(([patron], index) => (
              <option className="opt-patrones" key={index} value={patron}>
                {patron}
              </option>
            ))}
          </select>

          <label className="calc-label" htmlFor="m-m-pluma">
            Mutacion patron pluma:
          </label>
          <select
            className="calc-patron-pluma"
            name="Seleciona un patron pluma"
            id="m-m-pluma"
            onChange={(e) => {
              setPatronPlumaM(e.target.value);
            }}
          >
            <option className="opt-pluma" value="">
              Select
            </option>
            {[...PatronPMap.entries()].map(([pluma], index) => (
              <option className="opt-pluma" key={index} value={pluma}>
                {pluma}
              </option>
            ))}
          </select>
        </div>

        <div className="calc-hembra">
          <h3 className="cont-hembra">Hembra</h3>

          <label className="calc-label" htmlFor="m-h-color">
            Mutacion color:
          </label>
          <select
            className="calc-color"
            name="seleciona un color"
            id="m-h-color"
            onChange={(e) => {
              setColorH(e.target.value);
            }}
          >
            <option className="opt-colores" value="">
              Select
            </option>
            {[...ColoresMap.entries()].map(([color], index) => (
              <option className="opt-colores" key={index} value={color}>
                {color}
              </option>
            ))}
          </select>

          <label className="calc-label" htmlFor="m-h-patron">
            Mutacion patron:
          </label>
          <select
            className="calc-patron"
            name="seleciona un patron"
            id="m-h-patron"
            onChange={(e) => {
              setPatronH(e.target.value);
            }}
          >
            <option className="opt-patrones" value="">
              Select
            </option>
            {[...PatronMMap.entries()].map(([patron], index) => (
              <option className="opt-patrones" key={index} value={patron}>
                {patron}
              </option>
            ))}
          </select>

          <label className="calc-label" htmlFor="m-h-pluma">
            Mutacion patron pluma:
          </label>
          <select
            className="calc-patron-pluma"
            name="Seleciona un patron pluma"
            id="m-h-pluma"
            onChange={(e) => {
              setPatronPlumaH(e.target.value);
            }}
          >
            <option className="opt-pluma" value="">
              Select
            </option>
            {[...PatronPMap.entries()].map(([pluma], index) => (
              <option className="opt-pluma" key={index} value={pluma}>
                {pluma}
              </option>
            ))}
          </select>
        </div>
        <div className="calc-action">
          <button
            className="calc-btn"
            name="Analizar"
            type="button"
            onClick={calc}
          >
            Calcular
          </button>
          <button
            className="calc-btn"
            type="button"
            onClick={() => setResults([])}
          >
            Limpiar
          </button>
          <div ref={contenedorRef} class="buzon-container">
            <button
              className="buzon-icon"
              onClick={() => setMostrar((prev) => !prev)}
              aria-label="Abrir notificaciones"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 6a2 2 0 012-2h14a2 2 0 012 2v.01M3 6v12a2 2 0 002 2h14a2 2 0 002-2V6M3 6l9 6 9-6"
                />
              </svg>
            </button>
            {mostrar && (
              <div class="buzon-dropdown border">
                <h3 className="buzon-title">Mensajes</h3>
                {results.length > 0 ? (
                  <ul>
                    <li className="buzon-text">{`Nota Plumas: ${results?.[2]?.Message}`}</li>
                    <li className="buzon-text">{`Nota Patron: ${results?.[1]?.Message}`}</li>
                    <li className="buzon-text">{`Nota Color: ${results?.[0]?.Message}`}</li>
                  </ul>
                ) : (
                  <p className="buzon-text">No hay mensajes</p>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="calc-result">
          <table>
            <thead>
              <tr>
                <th scope="row"></th>
                <th className="table-head" scope="col">
                  Pluma
                </th>
                <th className="table-head" scope="col">
                  Patrón
                </th>
                <th className="table-head" scope="col">
                  Color
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="table-head sign-m" scope="row">
                  Mutación
                </th>
                <td className="table-field">
                  {results?.[2]?.MutationM ?? "N/A"}
                </td>
                <td className="table-field">
                  {results?.[1]?.MutationM ?? "N/A"}
                </td>
                <td className="table-field">
                  {results?.[0]?.MutationM ?? "N/A"}
                </td>
              </tr>
              <tr>
                <th className="table-head" scope="row">
                  Porcentaje:{" "}
                </th>
                <td className="table-field">
                  {results?.[2]?.PorcentageM ?? "N/A"}
                </td>
                <td className="table-field">
                  {results?.[1]?.PorcentageM ?? "N/A"}
                </td>
                <td className="table-field">
                  {results?.[0]?.PorcentageM ?? "N/A"}
                </td>
              </tr>
              <tr>
                <th className="table-head sign-h" scope="row">
                  Mutación
                </th>
                <td className="table-field">
                  {results?.[2]?.MutationF ?? "N/A"}
                </td>
                <td className="table-field">
                  {results?.[1]?.MutationF ?? "N/A"}
                </td>
                <td className="table-field">
                  {results?.[0]?.MutationF ?? "N/A"}
                </td>
              </tr>
              <tr>
                <th className="table-head" scope="row">
                  Porcentaje:{" "}
                </th>
                <td className="table-field">
                  {results?.[2]?.PorcentageF ?? "N/A"}
                </td>
                <td className="table-field">
                  {results?.[1]?.PorcentageF ?? "N/A"}
                </td>
                <td className="table-field">
                  {results?.[0]?.PorcentageF ?? "N/A"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default PageCalculadora;
