import React, {Component} from 'react';
import PropTypes from 'prop-types'
import classes from './Person.css';

class Person extends Component {    
    render() {
        return (
        <div className={classes.Person}>
        <p onClick={this.props.click}>I'm {this.props.name || "a gerneic person"}, and I'm {this.props.age || "over 0"} years old.</p>
        <div>{this.props.children}</div>
        <input type="text" onChange={this.props.changed} defaultValue={this.props.name}/>
        </div>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.string,
    changed: PropTypes.func
}

export default Person