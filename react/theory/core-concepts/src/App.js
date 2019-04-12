import React from 'react'
import ReactDOM from 'react-dom'

// These are not actual 'DOM' elements - just descriptions of DOM elements.
const element = React.createReactElement('div', {
	className: 'welcome-message' // Describe DOM node.
}, 'howdy there partner') 

console.log(element) 

ReactDOM.render( 
	element, 
	document.getElementById('root')
)
