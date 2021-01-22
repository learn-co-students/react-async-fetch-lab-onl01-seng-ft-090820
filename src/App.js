import React, { Component } from 'react'

export default class App extends Component {

    state = {
        astronauts: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(r => r.json())
        .then(({people}) => this.setState({astronauts: people}))
    }

    render() {
        return (
            <div>
                {this.state.astronauts.map((person, id) => <h1 key={id}>{person.name}</h1>)}
            </div>
        )
    }   
}