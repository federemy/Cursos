import React from 'react';
import './modal.css'

function Modal(props) {
    return (
        <div className="Modal">
        modal
            {props.children}
            <button onClick={props.handleCloseClick}>cerrar</button>
        </div>
    )
}

export default Modal