function(data) {
	var username = $$("#account").userCtx.name;
	var project;
	var projects = data.rows.map(function(row) { 
		project = row.doc;
		if (project)
			return {project:project};
		else
			return {};
	});
	return { 
		username:username,
		projects:projects
	};
};
