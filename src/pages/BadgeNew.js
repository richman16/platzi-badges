import React from 'react';

// Importar estilos
import './styles/BadgeNew.css';
// Importar Componentes
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import hero from '../images/badge-header.svg';

class BadgeNew extends React.Component {
    render () {
        return (
            <div>
                <Navbar />

                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={hero} alt="Logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge
                                firstName="Ricardo"
                                lastName="Castillo"
                                twitter="richman16"
                                jobTitle="IT engineer and web developer"
                                avatar="https://www.gravatar.com/avatar/f44641a21a40330e05484ab104a66eb9?s=200" />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default BadgeNew;