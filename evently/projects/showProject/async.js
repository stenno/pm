function(cb, e, project_id) {
	$$(this).app.db.openDoc(project_id, { success:function(doc){cb(doc);}});
} 
