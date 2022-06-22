import React, { Component } from 'react';
import Media from './media.js';
import './playlist.css';

/*class Playlist extends Component {
  render() {
    const playlist = this.props.data.categories[0].playlist
    console.log(this.props.data);
    return (
      <div className="Playlist">
        {
          playlist.map((item) => { // mapear los datos significa que itera por cada elemento
            return <Media {...item} key={item.id} />
          })
        }
      </div>
    )
  }
}

export default Playlist;
*/

class Playlist extends Component{
  render() {
    const category = this.props.data.categories;
    return (
      <div>
        {
          category.map((item) => {
            return (
              <div>
                <h2>{item.title}</h2>
                { item.playlist.map((playlist) => <Media {...playlist} key={playlist.id} />) }
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default Playlist;