import React from 'react';
import VisitItem from './VisitItem';
import './VisitList.css';

const visits = [
  {
    day: '7',
    month: 'Jun',
    title: 'Recorrido histórico del museo',
    date: '2024-06-07',
    time: '10:00 a.m.',
    participants: 20,
    observations: 'Primera visita',
    className: 'f-item'
  },
  {
    day: '8',
    month: 'Jun',
    title: 'Visita temática de arte contemporáneo',
    date: '2024-06-08',
    time: '02:00 p.m.',
    participants: 15,
    observations: 'Segunda visita'
  },
  {
    day: '10',
    month: 'Jun',
    title: 'Visita temática de arte contemporáneo',
    date: '2024-06-10',
    time: '01:00 p.m.',
    participants: 15,
    observations: 'Segunda visita'
  },
  {
    day: '15',
    month: 'Jun',
    title: 'Recorrido histórico del museo',
    date: '2024-06-15',
    time: '09:00 a.m.',
    participants: 15,
    observations: 'Segunda visita'
  },
  {
    day: '21',
    month: 'Jun',
    title: 'Visita temática de arte contemporáneo',
    date: '2024-06-21',
    time: '03:00 p.m.',
    participants: 15,
    observations: 'Segunda visita',
    className: 'l-item'
  }
];

function VisitList() {
  return (
    <div>
      <div className="container">
        <ul className="visit-list">
          {visits.map((visit, index) => (
            <VisitItem key={index} visit={visit} />
          ))}
        </ul>
        <div className="redirect-button-container">
          <a href="NEvento.html">
            <button id="redirectButton">Agendar nuevo evento</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default VisitList;
