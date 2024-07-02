import React, { useState } from "react";
import "./Bitacora.css";

function Bitacora() {
  const [activities, setActivities] = useState([{ id: 1 }]);

  const addFieldset = () => {
    setActivities([...activities, { id: activities.length + 1 }]);
  };

  const removeFieldset = (id) => {
    setActivities(activities.filter((activity) => activity.id !== id));
  };

  return (
    <div className="App">
      <h2>Nueva Bitácora</h2>
      <form>
        <fieldset>
          <label id="nom-empleado">Nombre: </label>
        </fieldset>
        <fieldset>
          <label id="id-empleado">ID de empleado: </label>
        </fieldset>
        <fieldset>
          <label className="fecha">
            Fecha* <input type="date" id="start" name="trip-start" defaultValue="2024-00-00" min="2024-06-06" max="2028-12-31" />
          </label>
        </fieldset>
        <div id="contenedor-fieldset">
            <fieldset>
                <label id="titulo-label">Nombre de la actividad*<input id="titulo" type="text" placeholder="Ingrese el nombre de la actividad" required /></label>
            </fieldset>
            <fieldset>
                <label>Descripción*
                    <textarea></textarea>
                </label>
            </fieldset>
        </div>
        <div id="contenedor-fieldset">
          {activities.map((activity) => (
            <div key={activity.id} className="activity-group">
              <fieldset>
                <label>
                  Nombre de la actividad*
                  <input type="text" placeholder="Ingrese el nombre de la actividad" required />
                </label>
                <button type="button" className="boton-eliminar" onClick={() => removeFieldset(activity.id)}>
                  ✖
                </button>
              </fieldset>
              <fieldset>
                <label>
                  Descripción*
                  <textarea required></textarea>
                </label>
              </fieldset>
            </div>
          ))}
        </div>
        <fieldset className="grupo-boton">
          <button className="botones" type="button" onClick={addFieldset}>
            Agregar Actividad
          </button>
        </fieldset>
        <fieldset>
          <label>
            Observaciones
            <textarea></textarea>
          </label>
        </fieldset>
        <fieldset className="grupo-boton">
          <button className="upload-button botones" type="button" onClick={() => document.getElementById("file-upload").click()}>
            Adjuntar Archivo
          </button>
          <input type="file" id="file-upload" style={{ display: "none" }} />
        </fieldset>
        <input id="submit" type="submit" value="Registrar Bitácora" />
      </form>
    </div>
  );
}

export default Bitacora;




