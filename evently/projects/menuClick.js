function(e, name) {
	var menutriggers = ["allProjects"];
	if (menutriggers.indexOf(name) < 0) {
		$(this).text("");
	}
	else {
		$(this).trigger(name);
	}
}
