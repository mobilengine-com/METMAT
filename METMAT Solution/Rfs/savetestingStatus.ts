//# server typescript program savetestingStatus for form testingStatus
//# using reftab 'testingChecklist';

Log(form)
if (form.adminPanel.saveChange.submitter) {
    for (let row of form.tasks.rows) {
        if (row.edit) {
            Log(row.id)
            db.testingChecklist.Update({id:row.id},{done:row.editedResult.selectedKey})
        }
        
     }
}
if (form.adminPanel.saveOrder.submitter) {
    for (let row of form.tasks.rows) {
        db.testingChecklist.Update({id:row.id},{ordernum: int.Parse(row.editedOrder.text)})
     }
}