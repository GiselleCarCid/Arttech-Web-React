// FileModal.jsx
import React from 'react';
import './FileModal.css';

function FileModal({ closeModal }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes agregar la lógica para subir archivos
        closeModal();
    };

    return (
        <div id="fileModal" className="modal">
            <div className="modal-content">
                <span className="close-button" onClick={closeModal}>&times;</span>
                <div className="modal-header">
                    <h3>Adjuntar Archivos</h3>
                </div>
                <form id="fileForm" className="fileForm" onSubmit={handleSubmit}>
                    <input type="file" id="fileInput" className="input-file" multiple />
                    <div>
                        <button type="submit">Subir Archivos</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FileModal;
