import React from 'react';
import Media from './media.js';
import './playlist.css';




function Playlist(props) {
  //const playlist = props.data.categories[0].playlist
  //console.log(props.data);
  return (
    <div className="Playlist">
    
      {
        props.playlist.map((item) => {
          return <Media handleClick={props.handleOpenModal} {...item} key={item.id} />
        })
      }
    </div>
  )
}

export default Playlist;