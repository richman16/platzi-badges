import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import 'bootstrap/dist/css/bootstrap.css'

// Importar CSS Global a nuestra pagina principal
import './styles/global.css';

const container = document.getElementById('app');

ReactDOM.render(<App />, container);