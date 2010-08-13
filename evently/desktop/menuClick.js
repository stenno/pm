function(e, name) {
	var menutriggers = ["desktop"];
	if (menutriggers.indexOf(name) < 0) {
		$(this).text("");
	}
	else {
		$(this).trigger(name);
	}
}
