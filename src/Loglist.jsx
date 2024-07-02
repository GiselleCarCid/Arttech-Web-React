import React from 'react';

const LogList = ({ logs }) => {
  if (logs.length === 0) {
    return <p>No hay bitácoras para la fecha seleccionada.</p>;
  }

  return (
    <div>
      {logs.map((log, index) => (
        <div key={index} className="log-entry">
          <h3>{log.Nactividad}</h3>
          <div className="details">
            <p><strong>Nombre del empleado:</strong> {log.Nombrempleado}</p>
            <p><strong>ID del empleado:</strong> {log.IDempleado}</p>
            <p><strong>Descripción:</strong> {log.descripcion}</p>
          </div>
          <div className="attachments">
            {log.adjuntos.length > 0 ? <strong>Archivos adjuntos:</strong> : null}
            {log.adjuntos.map((file, idx) => (
              <a key={idx} href={`#`} download={file}>{file}</a> // eslint-disable-line jsx-a11y/anchor-is-valid
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LogList;


