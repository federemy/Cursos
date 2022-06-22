import React from 'react';
import './play-pause.css';
import Play from '../../icons/components/play.js';
import Pause from '../../icons/components/pause.js';

function PlayPause(props) {
    return (
        <div className="PlayPause">
            {
                props.pause ? //esto es como un if, despues se ponen los resultados si se cumple o no
          
                <button
                    onClick={props.handleClick} //asi se maneja el evento de click
                >
                    <Play size={25} color="white"/>
                </button>

                :

                <button
                    onClick={props.handleClick} //asi se maneja el evento de click
                >
                    <Pause size={25} color="white"/>
                </button>
            }
        </div>
    )
}

export default PlayPause;