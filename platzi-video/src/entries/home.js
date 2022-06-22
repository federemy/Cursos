import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home.js'
// Importamos dependencias de React
//import Playlist from './src/playlist/components/playlist';
import data from '../api.json';
// Seguimos importando dependencias

const app = document.getElementById('home-container');
// Referenciamos un elemento con ID app

//const holaMundo = <h1>Hola Mundo!!</h1>;
// Insertamos en una constante lo que queremos renderizar

//ReactDOM.render(<Media type="audio" title="Que es responsive design?" author="Fede" image="./images/covers/gorillaz.jpg"/>, app);
//render( <Playlist data={data} />, app);
render( <Home data={data} />, app);

// Le decimos a ReactDOM que renderizar y donde renderizar
// Pasamos el Media asi, parecido a HTML

// para pasarle propiedades dinamicas se pone title="" dentro de Media y se declar en el .js <h3 className="Media-title">{this.props.title}</h3>
