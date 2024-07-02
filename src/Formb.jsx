import React from 'react';
import './Formb.css'; // Asegúrate de tener este archivo en src

const Formb = () => {
    return (
        <form>
            <h2>Agendar nuevo evento</h2>
            <fieldset>
                <label htmlFor="titulo">Título
                    <input id="titulo" type="text" placeholder="Ingrese el nombre del evento" required />
                </label>
            </fieldset>
            <fieldset>
                <label htmlFor="participantes">Número de participantes
                    <input id="nump" type="number" min="18" max="99" placeholder="Ingrese el número de participantes esperados" />
                </label>
            </fieldset>
            <fieldset>
                <label htmlFor="fecha">Fecha
                    <input type="date" id="start" name="trip-start" defaultValue="2024-06-06" min="2024-06-06" max="2028-12-31" />
                </label>
            </fieldset>
            <fieldset>
                <label htmlFor="hora">Hora
                    <input type="time" id="time-input" name="time-input" required />
                </label>
            </fieldset>
            <fieldset>
                <label htmlFor="observaciones">Observaciones o requisitos especiales
                    <textarea id="observaciones"></textarea>
                </label>
            </fieldset>
            <input id="submit" type="submit" value="Submit" />
        </form>
    );
};

export default Formb;

