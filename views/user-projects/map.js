function(doc) {
	if (doc.type == "project" && doc.users) {
			doc.users.forEach(function(user) {
				emit(user, {"_id":doc._id});
			});
	}
}
				
