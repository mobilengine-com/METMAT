//# server typescript program savetestingStatus for form testingStatus
//# using reftab 'testingChecklist';
//# using reftab 'environmentValues';

Log(form)
if (form.adminPanel.saveChange.submitter) {
    for (let row of form.tasks.rows) {
        if (row.edit) {
            Log(row.id)
            db.testingChecklist.Update({id:row.id, project: form.user_proj},{done:row.editedResult.selectedKey})
        }
        
     }
}
if (form.adminPanel.saveOrder.submitter) {
    for (let row of form.tasks.rows) {
        db.testingChecklist.Update({id:row.id, project: form.user_proj},{ordernum: int.Parse(row.editedOrder.text)})
     }
}