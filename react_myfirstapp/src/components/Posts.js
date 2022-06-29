import React, { Component } from 'react'

export default class Posts extends Component {

    state = {
        posts: []
    }

    //obtener datos previo a la carga de la app, metodos relacionados con el ciclo de vida de la app
    async componentDidMount() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        console.log(res)

        const data = await res.json()
        console.log(data)
        this.setState({posts: data})
    }

    render() {
        return (
            <div>
                <h1>Posts</h1>
                { //hacemos un bucle for para recorrer con map a las publicaciones
                    this.state.posts.map(post => {
                        return <div key={post.id}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                            </div>
                    })
                }
            </div>
        )
    }
}
