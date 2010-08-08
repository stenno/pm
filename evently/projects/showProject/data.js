function(e, data) {
	var users = data.users.map(function(user) { return {user:user};});
	var lists = data.tasklists;
	return {
		name:data._id,
		users:users,
		tasklists:lists
	};
};
