function() {
	var user = $$("#account").userCtx.name;
	return {
		view:"user-projects",
		group:true,
		key: unescape(user) 
	}
}
