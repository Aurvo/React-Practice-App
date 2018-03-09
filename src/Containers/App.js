import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

class App extends Component {
  state = {
    people: [
      {id: "000", name: "Thomas", age: "29"},
      {id: "001", name: "Samantha", age: "21"},
      {id: "002", name: "God", age: "infinite"}
    ],
    showPeople: false
  }

  nameChangedHandler = (event, id) => {
    const newpeople = [...this.state.people]
    newpeople.find(p => p.id === id).name = event.target.value
    this.setState({people: newpeople})
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.people]
    persons.splice(index, 1)
    this.setState({people: persons})
  }

  togglePersonsHandler = () => {
    this.setState({showPeople: !this.state.showPeople});
  }
  
  render() {
    let persons = null;
    if (this.state.showPeople) {
      persons = <Persons
        people={this.state.people}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}/>;
    }
    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.title}
          people={this.state.people}
          toggle={this.togglePersonsHandler}
          pplAreShown={this.state.showPeople}/>
        {persons}
      </div>
    );
  }
}

export default App;
