// create your App component here
import React, { Component } from 'react'

export default class App extends Component {

    state = {
        peopleInSpace: []
    }
    
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then (response => response.json())
        .then (data => { 
            console.log(data);
            this.setState({
                peopleInSpace: data.people
            }) 
        })
    }

    render() {
        const list = this.state.peopleInSpace.map(person => <li>{person.name}</li>)

        return (
            <div>
                {list}
            </div>
        )
    }
    
}
//http://api.open-notify.org/astros.json