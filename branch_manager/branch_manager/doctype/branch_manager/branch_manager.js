// Copyright (c) 2025, Piyush Shukla and contributors
// For license information, please see license.txt

frappe.ui.form.on("Branch Manager", {
	refresh(frm) {
		frm.disable_save();
		frm.page.sidebar.hide();
		frappe.call({
            method: 'branch_manager.branch_manager.doctype.branch_manager.branch_manager.get_installed_apps',
            callback: function(r) {
                if (r.message) {
                    frm.set_df_property('select_app', 'options', r.message.join('\n'));
                    frm.refresh_field('select_app');
                }
            }
        });
	},
});
