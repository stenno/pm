function(data) {
	var projects = data.rows.map(function(row) {
		return {project:row.value._id};
	});
	return {projects:projects};
}
