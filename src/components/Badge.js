import React from 'react';

import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
    render() {
        return <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt="logo de la conferencia" />
            </div>

            <div className="Badge__section-name">
                <img 
                    className="Badge__avatar"
                    src="https://www.gravatar.com/avatar/f44641a21a40330e05484ab104a66eb9?s=200"
                    alt="avatar"/>
                <h1>Ricardo <br/>Castillo</h1>
            </div>

            <div className="Badge__section-info">
                <h3>IT Engineer and web developer</h3>
                <div>@richman16</div>
            </div>

            <div className="Badge__footer">
                #platziconf
            </div>
        </div>;
    }
}

export default Badge;