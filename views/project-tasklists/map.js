function(doc) {
	if (doc.type == "project" && doc.tasklists) {
		doc.tasklists.forEach(function(tasklist) {
			if (tasklist.tasks) {
				emit(
					[doc._id, tasklist.name],
					tasklist.tasks.map(function(task) {
						return {"_id":task};
				}));
			}
					
		});
	}
}
