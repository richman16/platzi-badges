import React from 'react';

// Importar estilos del componente
import './styles/BadgesList.css';

import twitterLogo from '../images/twitter.svg';

class BadgesList extends React.Component {
    twitterURL = "https://www.twitter.com/";
    render () {
        return (
            <ul className="list-unstyled">
                {
                    this.props.badges.map( (badge) => {
                        return <li key={badge.id} className="BadgesListItem">
                            <img className="BadgesListItem__avatar" src={badge.avatarUrl} alt="avatar" />
                            <div className="Badges__info">
                                <p>
                                    <strong>{badge.firstName} {badge.lastName}</strong>
                                </p>
                                <p>
                                    <img
                                        className="BadgesListTwitter"
                                        src={twitterLogo}
                                        alt="logo twitter" />
                                    <a href={this.twitterURL+badge.twitter}>
                                        @{badge.twitter}
                                    </a>
                                </p>
                                <p>
                                    {badge.jobTitle}
                                </p>
                            </div>
                        </li>;
                    } )
                }
            </ul>
        );
    }
};

export default BadgesList;