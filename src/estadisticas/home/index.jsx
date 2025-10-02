

import React, { useEffect, useState } from "react";
import "./style.css";
 
function Home() {
  const [modo, setModo] = useState("departamentos");
  const [busqueda, setBusqueda] = useState("");
  const [departamentos, setDepartamentos] = useState([]);
  const [capitales, setCapitales] = useState([]);

  useEffect(() => {
    const urlDpt =
      "https://gist.githubusercontent.com/diaztibata/fe3d238ee6b59ef71c8001654441a9f6/raw/4974a1b1cab3ac606dd96aa2d34d6e7c8e007daf/departamentosglobal.json";
    const urlCpt =
      "https://gist.githubusercontent.com/diaztibata/fe3d238ee6b59ef71c8001654441a9f6/raw/4974a1b1cab3ac606dd96aa2d34d6e7c8e007daf/capitalesglobal.json";

    const fetchJson = async (url, setter) => {
      try {
        const resp = await fetch(url);
        if (!resp.ok) throw new Error("Error al cargar JSON: " + resp.status);
        const json = await resp.json();
        setter(json);
        console.log("Datos cargados de ", url, json);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchJson(urlDpt, setDepartamentos);
    fetchJson(urlCpt, setCapitales);
  }, []);

  return (
    <div>
      <div>
        <button onClick={() => setModo("departamentos")}>Mostrar Departamentos</button>
        <button onClick={() => setModo("capitales")}>Mostrar Capitales</button>
      </div>

      

      <div>
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      <div className="lugar">
        {modo === "departamentos" && Array.isArray(departamentos?.data?.dpt) &&
          departamentos.data.dpt
            .filter((item) =>
              busqueda === ""
                ? true
                : item.nm?.toLowerCase().includes(busqueda.toLowerCase())
            )
            .map((item, idx) => (
              <div key={idx} className="item">
                {item.nm}
              </div>
            ))}
        {modo === "capitales" && Array.isArray(capitales?.data?.cpt) &&
          capitales.data.cpt
            .filter((item) =>
              busqueda === ""
                ? true
                : item.nm?.toLowerCase().includes(busqueda.toLowerCase())
            )
            .map((item, idx) => (
              <div key={idx} className="item">
                {item.nm}
              </div>
            ))}
      </div>
    </div>
  );
}

export default Home;
