function(doc) {
	if (doc.type == "project" && doc.users) {
		doc.users.forEach(function(user) {
			emit(doc._id, user);
		});
	}
}
