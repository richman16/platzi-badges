import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

import './styles/global.css';

import BadgeNew from './pages/BadgeNew';

const container = document.getElementById('app');

ReactDOM.render(<BadgeNew />, container);
// ReactDOM.render(<Badge
//     firstName="Cali"
//     lastName="Castillo"
//     avatar="https://www.gravatar.com/avatar/f44641a21a40330e05484ab104a66eb9?s=200"
//     jobTitle="IT Engineer and web developer"
//     twitter="richman16" />,container);






// ReactDOM.render(__qué__, __dónde__);
// ReactDOM.render(jsx,container);


// const element = document.createElement('h1');

// element.innerText = 'Hello, platzi badges!';

// const container = document.getElementById('app');

// container.appendChild(element);


// const element = <h1>Hello platzi badges from React!</h1>
// const element = React.createElement(_elemento_, _atributos_, _children_);
// const element = React.createElement('h1', {}, 'Hola, soy el children!');

// const name = 'Richie';

// const element = React.createElement('h1', {}, `Hola, soy ${name}`);

// const jsx = <h1>Hola! Soy {name}</h1>

// const element = (
//     <div>
//         <h1>Hola, soy Richie!</h1>
//         <p>Soy ingeniero en TI y desarrollador web</p>
//     </div>
// );

// const jsx = <div>
//     <h1>Hola! Soy Richie</h1>
//     <p>Soy ingeniero en TI</p>
// </div>