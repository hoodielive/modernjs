function formatMessage( name, id, avatar ) {
	return {
		name,
		id,
		avatar,
		timestamp: Date.now(),
		save () {
			// save function.
		}
	}
}
