frappe.ui.form.on('BHSE', {
   refresh: function(frm) {
    console.log
       frm.add_custom_button(__('Get User Email Address'), function() {
           frappe.msgprint(frm.doc.name);
       }, __("Utilities"));
   }
});