function() {
	var menu = $(this);
	var name = this.name;
	menu.trigger("menuClick", [name]);
}
