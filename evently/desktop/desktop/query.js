function() {
	var user = $$("#account").userCtx.name;
	return {
		view:"user-projects",
		key: unescape(user),
		include_docs:true 
	}
}
