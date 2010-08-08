function(data) {
	return { 
		username:data.rows[0].key,
		projects:data.rows[0].value.map(function(project) {
			return {name:project};
		})
	};
}
