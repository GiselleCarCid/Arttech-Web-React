import React, { useState } from 'react';
import LogList from './Loglist'; 
import './RBitacoras.css'; 

const logData = {
  "2024-06-01": [
    {
      Nombrempleado: "Juan Pérez",
      IDempleado: "001",
      Nactividad: "Aseo de sala para evento",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      adjuntos: ["Eventos_junio.pdf"]
    },
    {
      Nombrempleado: "María Gómez",
      IDempleado: "002",
      Nactividad: "Sesión de Conservación de Obra",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      adjuntos: []
    }
  ],
  "2024-06-02": [
    {
      Nombrempleado: "Carlos Ramírez",
      IDempleado: "003",
      Nactividad: "Capacitación interna",
      descripcion: "Sesión de capacitación sobre el nuevo software.",
      adjuntos: ["manual_software.pdf", "presentacion_capacitacion.pptx"]
    }
  ]
};

function RBitacoras() {
  const [selectedDate, setSelectedDate] = useState('');
  const [showLogs, setShowLogs] = useState(false);

  const loadLogs = () => {
    setShowLogs(true);
  };

  return (
    <div>
      <h2>Bitácoras del Mes</h2>
      <div className="container">
        <div className="selector-fecha">
          <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
          <button onClick={loadLogs}>Ver Bitácoras</button>
        </div>
        {showLogs && <LogList logs={logData[selectedDate] || []} />} 
      </div>
    </div>
  );
}

export default RBitacoras;

