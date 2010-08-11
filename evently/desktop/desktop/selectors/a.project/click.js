function() {
	$.log("this is this", this);
	$(this).trigger("showProject",[this.id]);
}
