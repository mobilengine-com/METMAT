//# server typescript program testFixed for form badtestcaselist
//# using reftab 'tc_list';
{
	for(var row of form.badtclist.rows)
	{
        Log(row)
        if(row.fixSubmit.submitter){
            db.tc_list.Update({tc_id: row.task_id.text},{last_status: "not tested"})
        }
	}
}