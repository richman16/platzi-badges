import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Layout from './Layout';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';

// Importar la pagina de Badges
import Badges from '../pages/Badges';
// Importar la pagina de BadgesNew
import BadgeNew from '../pages/BadgeNew';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Badges" component={Badges} />
                    <Route exact path="/Badges/New" component={BadgeNew} />
                    <Route path="/404"component={NotFound} />
                    <Redirect from="*" to="/404" />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;