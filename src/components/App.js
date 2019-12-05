import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Importar la pagina de Badges
import Badges from '../pages/Badges';
// Importar la pagina de BadgesNew
import BadgeNew from '../pages/BadgeNew';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/Badges" component={Badges} />
                <Route exact path="/Badges/New" component={BadgeNew} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;