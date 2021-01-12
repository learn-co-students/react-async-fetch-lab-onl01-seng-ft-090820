// create your App component here
import React, { Component } from 'react'

export default class App extends Component {
    state = {
        peopleInSpace: [],
        numberOfPeopleInSpace: 0
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                peopleInSpace: data.people,
                numberOfPeopleInSpace: data.number
            })
        })
    }

    render() {
        return(
            <div>
                People at this moment in space {this.state.numberOfPeopleInSpace}<br></br>
                <div>
                {this.state.peopleInSpace.map(person => (
                    <p>
                        {person.name}
                    </p>
                ))}
                
                </div>
            </div>
        )
    }
}
