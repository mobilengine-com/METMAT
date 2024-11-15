//# server typescript program testers for form testers
//# using reftab 'tester';
{
	for(var row of form.tester_table.rows)
	{
        Log(row)
        if(row.bDelete){
            db.tester.Delete({tester_name: row.tb_tester_name.text})
        }else{
            db.tester.InsertOrUpdate({tester_name: row.tb_tester_name.text},
		 	{tester_name: row.tb_tester_name.text, tester_email: row.tb_tester_email.text, tester_role: row.drRole.selectedKey, work_type: row.drWork.selectedKey, tester_active: row.drActive.selectedKey, participation: row.part.number});
        }
		
	}
}