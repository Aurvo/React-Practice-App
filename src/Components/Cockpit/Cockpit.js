import React from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {
  let txtClasses = []
  const numOfPpl = props.people.length
   if (numOfPpl < 3) {
       txtClasses.push(classes.red)
     if (numOfPpl < 2) {
       txtClasses.push(classes.bold)
     }
   }
   txtClasses = txtClasses.join(' ')
   const btnClass = props.pplAreShown ? classes.red : ''
   return (
   <React.Fragment>
     <h1>{props.title}</h1>
     <p className={txtClasses}>Changes color and boldness based on number of list items.</p>
     <button className={btnClass} onClick={props.toggle}>Toggle People</button>
   </React.Fragment>)
}

export default Cockpit