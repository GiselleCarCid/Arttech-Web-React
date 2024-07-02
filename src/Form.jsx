import React from 'react';
import './Form.css'; // Asegúrate de tener este archivo en src

const Form = () => {
    return (
        <form>
            <h2>Asignar nueva tarea</h2>
            <fieldset>
                <label htmlFor="empleado">Empleado
                    <select id="dropdown">
                        <option>Selección</option>
                        <option>Francisco García</option>
                        <option>Karen Avelar</option>
                        <option>Salvador Gámez</option>
                    </select>
                </label>
            </fieldset>
            <fieldset>
                <label htmlFor="tarea">Tarea a Asignar
                    <select id="dropdown">
                        <option>Selección</option>
                        <option>Limpieza</option>
                        <option>Revisión</option>
                        <option>Acomodo</option>
                    </select>
                </label>
            </fieldset>
            <fieldset>
                <label id="name-label">Fecha Limite
                    <input type="date" id="start" name="trip-start" defaultValue="2024-06-06" min="2024-06-06" max="2028-12-31" />
                </label>
            </fieldset>
            <fieldset>
                <label htmlFor="time-input">Hora Limite</label>
                <input type="time" id="time-input" name="time-input" required />
            </fieldset>
            <input id="submit" type="submit" value="Submit" />
        </form>
    );
};

export default Form;
