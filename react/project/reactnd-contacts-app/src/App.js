import React, { Component } from 'react';
import ListContacts from './ListContacts'

const contacts = [
	{
		id: 'esu',
		name: 'Esu Onilu', 
		handle: '@esuonilu',
		avatarURL: 'http://localhost:5001/esu.jpg'
	},
	{
		id: 'obatala',
		name: 'Oba Tala', 
		handle: '@obatala',
		avatarURL: 'http://localhost:5001/obatala.jpg'
	},
	{
		id: 'orunmilla',
		name: 'Orun Milla', 
		handle: '@orunmilla',
		avatarURL: 'http://localhost:5001/orunmilla.jpg'
	}
]
class App extends Component {
  render() {
    return (
      <div>
        <ListContacts contacts={contacts}/>
      </div>
    );
  }
}

export default App;
