# Copyright (c) 2025, Piyush Shukla and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class BranchManager(Document):
    pass


@frappe.whitelist()
def get_installed_apps():
    return frappe.get_installed_apps()
