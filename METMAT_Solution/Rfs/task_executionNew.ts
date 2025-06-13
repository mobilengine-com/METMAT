//# server typescript program task_execution for form task_execution
//# using reftab 'task';
//#using reftab 'test_case';
//#using reftab 'tc_list';
//#using reftab 'test_case_tag';
//#using reftab 'tc_jira_list';
Log(form)

let act_start_tc_date = form.open_form.DtlToDtdb();
let act_end_tc_date = dtl.Now().DtlToDtdb();

for (let row of form.selectedTasks.rows) {
    if (row.result.fChanged) {
        Log("Update test id: " +row.id.text+ " result: "+ row.result.selectedText)
        db.task.Update({guid: row.guid}, 
            {result: row.result.selectedText, 
                start_tc_date: act_start_tc_date,
                end_tc_date: act_end_tc_date, 
                time_need: row.runTime.number.ToString(),
                note: row.note.text
            });
            Log("Update last state: "+ row.id.text)
            db.tc_list.Update({tc_id: row.id.text}, {last_status: row.result.selectedText, last_sent_in: act_end_tc_date, note: row.note.text});
    }
    if (row.linkText.fChanged) {
        Log("Update test link "+ row.id.text)
        db.test_case.Update({id: row.id.text, platform: form.platformID.selectedKey},
            {link: row.linkText.text});
    }
    if (row.note.fChanged) {
        Log("Update note on test: "+ row.id.text)
        db.task.Update({guid: row.guid},
            {note: row.note.text});
    }
}   