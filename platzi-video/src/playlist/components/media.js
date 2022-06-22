import React, { PureComponent } from 'react';
// se puede llamar import React from 'react';
// Pero habría que escribir lo de abajo 'class Media extends React.Component
import PropTypes from 'prop-types';

import './media.css';

class Media extends PureComponent {//creas una clase, utilizando lo que react te da para crear componentes
    // constructor(props) { // metodo que tienen todas las clases dentro de js y se autollama cuando está el componente que lo contiene
    //     super(props) // para usar las propiedades
    //     // this.handleClick = this.handleClick.bind(this) // se enlaza el handleclick de abajo y se lo enlaza con Media
    //     this.state = { // para saber el estado de los componentes
    //         autor: props.author
    //     }
    // }

    state = { // en es7 es mas simple lo del state
        author: 'Fedeede'
    }

    // handleClick = (event) => { // las arrow function heredan siempre el contexto de su padre y asi tenes this disponible
    //     // console.log(this.props.title) // para que sepa lo que es this, hay que hacer lo del constructor
    //     // this.setState({
    //     //     author: 'Ricardo',
    //     // })
    // }
    render() {//es un metodo de la clase que trae la estructura html

    // class es una palabra reservada del lenguaje para hacer el componente, para agregar una clase hay que poner className=""
    return (//parece html pero es jsx, pero funciona como html
      <div className="Media" onClick={this.props.handleClick}>
        <div className="Media-cover">
          <img
            src={this.props.cover}
            alt=""
            width={260}
            height={160}
            className="Media-image"
          />
          <h3 className="Media-title">{this.props.title}</h3>
          <p className="Media-author">{this.state.author}</p>
        </div>
      </div>
    )
  }
}
//esto no se autoejecuta, hay que exportar algo, en este caso sería el componete Media
export default Media;
//despues se importa dentro de index.js

Media.propTypes = { //key de propiedad la clase Media
    cover: PropTypes.string,
    title: PropTypes.string.isRequired, // valida que tiene que venir si o si
    author: PropTypes.string,
    type: PropTypes.oneOf(['video','audio']) // valida si viene uno u otro texto
    //con esto se valida que son todos textos
}