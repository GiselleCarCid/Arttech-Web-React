import React, { useEffect, useState } from 'react';
import './Header.css'; // Asegúrate de tener este archivo en src

const Header = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [user, setUser] = useState({ name: 'Nombre Usuario', role: 'Cargo' });

    useEffect(() => {
        // Simular datos del usuario
        const userName = 'Andrea Medina';
        const userRole = 'Coordinadora';
        
        setUser({ name: userName, role: userRole });
    }, []);

    const handleHamburgerClick = (event) => {
        setMenuActive(!menuActive);
        event.stopPropagation();
    };

    const handleClickOutside = (event) => {
        if (!event.target.closest('.nav-menu') && menuActive) {
            setMenuActive(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [menuActive]);

    return (
        <header>
            <div className="hamburger" id="hamburger" onClick={handleHamburgerClick}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <nav id="nav-menu" className={`nav-menu ${menuActive ? 'active' : ''}`}>
                <ul>
                    <li><a href="user-page.html">
                        <img src="/images/casa.png" alt="Home" className="home-icon" />
                    </a></li>
                    <div className="div-item">
                        <li><a href="#services">Tareas</a></li>
                    </div>
                    <div className="div-item">
                        <li><a href="#about">Eventos</a></li>
                    </div>
                    <div className="div-item">
                        <li><a href="#contact">Bitácoras</a></li>
                    </div>
                </ul>
            </nav>
            <div className="user-info">
                <div className="user-details">
                    <span id="user-name">{user.name}</span>
                    <span id="user-role">{user.role}</span>
                </div>
                <a href="user-page.html">
                    <img src="/images/usuario.png" alt="Usuario" className="user-icon" />
                </a>
            </div>
        </header>
    );
};

export default Header;
