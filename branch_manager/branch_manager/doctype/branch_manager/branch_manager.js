// Copyright (c) 2025, Piyush Shukla and contributors
// For license information, please see license.txt

frappe.ui.form.on("Branch Manager", {
	refresh(frm) {
		frm.disable_save();
		frm.page.sidebar.hide();
		$("span.sidebar-toggle-btn").hide();
	},
});
