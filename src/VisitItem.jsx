// VisitItem.jsx
import React, { useState } from 'react';
import dropdownIcon from './images/dropdown.png';
import fileAddIcon from './images/file-add.png';
import './VisitList.css';
import FileModal from './FileModal';

function VisitItem({ visit }) {
    const [isVisible, setIsVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleDetails = () => {
        setIsVisible(!isVisible);
    };

    const openModal = (event) => {
        event.preventDefault();
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <li className={`visit-item ${visit.className}`}>
            <div className={`visit-header ${visit.className}`} onClick={toggleDetails}>
                <div className="circle">
                    <div className="date-circle">
                        <div className="day">{visit.day}</div>
                    </div>
                    <div className="month">{visit.month}</div>
                </div>
                <button className={`visit-toggle ${visit.className}`}>{visit.title}</button>
                <div className="add-attachment">
                    <button className="open-modal" onClick={openModal}>
                        <img src={fileAddIcon} alt="Files" className="FBrowser-icon" />
                    </button>
                </div>
                <img src={dropdownIcon} alt="Drop" className="dropdown-icon" />
            </div>
            <div className={`visit-details ${isVisible ? 'visible' : ''} ${visit.className}`}>
                <p>Fecha: {visit.date}</p>
                <p>Hora: {visit.time}</p>
                <p>Número de participantes: {visit.participants}</p>
                <p>Observaciones: {visit.observations}</p>
            </div>
            {isModalOpen && <FileModal closeModal={closeModal} />}
        </li>
    );
}

export default VisitItem;


