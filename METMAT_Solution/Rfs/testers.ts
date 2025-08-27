//# server typescript program testers for form testers
//# using reftab 'tester';
//# using reftab 'userRole';
{
    Log(form)
        for(var row of form.tester_table.rows)
        {
        if (row.btnSaveRoles.submitter) {
            for (var roleElement of row.role_table.rows) {
                if(roleElement.newProj.selectedKey != null){
                    db.userRole.Insert(
                    {
                        tester_email: row.tb_tester_email.text,
                        role: roleElement.drRole.selectedKey,
                        project: roleElement.newProj.selectedKey,

                    });
                }else{
                    db.userRole.Update({tester_email: row.tb_tester_email.text, project: roleElement.projName.text},
                    {
                        role: roleElement.drRole.selectedKey,
                    });
                }
            }

        }else{
            if(row.bDelete){
                db.tester.Delete({tester_name: row.tb_tester_name.text})
            }else{
                db.tester.InsertOrUpdate({tester_name: row.tb_tester_name.text},
                    {tester_name: row.tb_tester_name.text, tester_email: row.tb_tester_email.text, work_type: row.drWork.selectedKey, tester_active: row.drActive.selectedKey, participation: row.part.number, active_project: row.drActiveProject.selectedKey});
            }
        }

	}
}