import React, { Component } from 'react';

class ContactList extends React.Component {
	render() {
		const people = this.props.contacts

		return <ol>
			{people.map((person) => (
				<li key={person.name}>{person.name}</li>
			))}
		</ol>
	}
}

class App extends Component {
  render() {
    return (
      <div className="App">
				<ContactList contacts ={[
					{ name: 'Getting on my Nerves' },
					{ name: 'Damn nvim please cooperate!!!!!' },
					{ name: 'damn... ' },
				]}/>
				<ContactList contacts ={[
					{ name: 'blah in slow motion...' },
					{ name: 'not impressed' },
					{ name: 'sleepy... ' },
				]}/>
				<ContactList contacts ={[
					{ name: 'I remember you' },
					{ name: 'We should have been.. ' },
					{ name: 'damn... ' },
				]}/>
      </div>
    );
  }
}

export default App;
