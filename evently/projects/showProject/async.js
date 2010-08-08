function(cb,e, params) {
	$.log(JSON.stringify(params));
	$$(this).app.db.openDoc(params, { success:function(doc){cb(e,doc);}});
} 
