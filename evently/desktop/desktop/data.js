function(data) {
	var username = $$("#account").userCtx.name;
	var projects = data.rows.map(function(row) { return {name:row.doc._id}; });
	
	return {
		username:username,
		projects:projects
	};
};
