function() {
	var project_id = this.id.split("_";
	project_id.pop();
	project_id = project_id.join("_");
	$(this).trigger("showProject",[project_id]);
}
