import React, { Compoent } from 'react'; 

class ContactList extends React.Component {
  render() {
    const people = this.props.contacts

    return <ol>  
      { people.map(( person ) => (
        <li key={person.name}>  
      ))}    
      </ol>
    }
}


export default App;

