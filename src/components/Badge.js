import React from 'react';

import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
    twitterURL = "https://www.twitter.com/"
    render() {
        // const firstName = "Ricardo";
        // const lastName = "Castillo";

        return <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt="logo de la conferencia" />
            </div>

            <div className="Badge__section-name">
                <img 
                    className="Badge__avatar"
                    src={this.props.avatar}
                    alt="avatar"/>
                <h1>{this.props.firstName} <br/>{this.props.lastName}</h1>
            </div>

            <div className="Badge__section-info">
                <h3>{this.props.jobTitle}</h3>
                <div>
                    <a
                        href={this.twitterURL+this.props.twitter}
                        target="_blank"
                        rel="noopener noreferrer">
                        @{this.props.twitter}
                        </a>
                </div>
            </div>

            <div className="Badge__footer">
                #platziconf
            </div>
        </div>;
    }
}

export default Badge;