class User extends React.Component {
	render() {
		<div>
			<p>Username: {this.props.username}</p>
			<p>Is Friend?: {this.props.friend}</p>
		</div>
	}
}

<User username='Osa' friend={true}/>
