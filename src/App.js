// create your App component here

import React, { Component }from 'react';

export default class App extends Component {

    state = {
        peopleInSpace: []
    }

    render() {
        return (
            <div>
                {this.state.peopleInSpace.map((per, id) => <h1 key={id}>{per.name} went to space in {per.craft}</h1>)}
            </div>
        )
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    peopleInSpace: data.people
                })
            })
    }

}