import { ColoresMap, PatronMMap, PatronPMap } from "../Db/DbMut";

function PageCalculadora() {
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
          >
            <option className="opt-colores" value="">
              Select
            </option>
            {[...ColoresMap.entries()].map(([color, mutacion], index) => (
              <option className="opt-colores" key={index} value={mutacion}>
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
          >
            <option className="opt-patrones" value="">
              Select
            </option>
            {[...PatronMMap.entries()].map(([patron, mutacion], index) => (
              <option className="opt-patrones" key={index} value={mutacion}>
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
          >
            <option className="opt-pluma" value="">
              Select
            </option>
            {[...PatronPMap.entries()].map(([pluma, mutacion], index) => (
              <option className="opt-pluma" key={index} value={mutacion}>
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
          >
            <option className="opt-colores" value="">
              Select
            </option>
            {[...ColoresMap.entries()].map(([color, mutacion], index) => (
              <option className="opt-colores" key={index} value={mutacion}>
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
          >
            <option className="opt-patrones" value="">
              Select
            </option>
            {[...PatronMMap.entries()].map(([patron, mutacion], index) => (
              <option className="opt-patrones" key={index} value={mutacion}>
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
          >
            <option className="opt-pluma" value="">
              Select
            </option>
            {[...PatronPMap.entries()].map(([pluma, mutacion], index) => (
              <option className="opt-pluma" key={index} value={mutacion}>
                {pluma}
              </option>
            ))}
          </select>
        </div>
        <button className="calc-btn" name="Analizar" type="button">
          Calcular
        </button>
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
                <th scope="row"></th>
                <td className="table-field">N/A</td>
                <td className="table-field">N/A</td>
                <td className="table-field">N/A</td>
              </tr>
              <tr>
                <th className="table-head" scope="row">
                  Porcentaje:{" "}
                </th>
                <td className="table-field">N/A</td>
                <td className="table-field">N/A</td>
                <td className="table-field">N/A</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default PageCalculadora;
