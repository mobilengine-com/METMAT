//# server typescript program testcase_monitor for form testcase_monitor
//# using reftab 'task';
//# using reftab 'test_case';
//# using reftab 'test_case_tag';

{
    Log(form.addtest)
    if (form.addtest.saveMissingTests.submitter) {
        Log("Save missing test")
        for(var row of form.addtest.tbNewLb.rows){
            Log(row.add_tcs_id.text)
            db.test_case.Insert({
                id:             row.add_tcs_id.text,
                tc_description: row.add_tcs_dc.text,
                platform:       row.add_tcs_platform.selectedKey,
                link:           row.add_tcs_link.text,
                time:           row.add_tcs_time.number,
                addedDate:      dtl.Now().DtlToDtdb(),
                project:        form.user_proj

            })
            Log("Added"+row.add_tcs_id.text)
            if(row.add_tcs_tags.selectedTags != null){
                for(var tag of row.add_tcs_tags.selectedTags){
                    Log(tag)
                    db.test_case_tag.Insert({
                        tc_id: row.add_tcs_id.text,
                        tag:tag.v,
                        platform:row.add_tcs_platform.selectedKey
                    })
                }
            }else{
                Log("No tag added")
            }
            
        }
    }
    if (form.sbsave.submitter) {
        Log("SAVE")
        for(var row of form.tcTable.rows){
            if (row.edited && row.delete) {
                Log("Delete "+row.tcId.text)
                db.test_case_tag.DeleteMany({tc_id:row.tcId.text, platform: row.tcPlatform.text})
                db.test_case.Delete({id:row.tcId.text, platform: row.tcPlatform.text})
                db.task.DeleteMany({task_id: row.tcId.text, project: form.user_proj})
            }else if (row.edited) {
                Log("Edited "+row.tcId.text)
                db.test_case.Update({id:row.tcId.text},{
                    tc_description: row.tcEditedDesc.text,
                    link:           row.tcEditedLink.text,
                    time:           row.nbEditedTime.number})
                db.test_case_tag.DeleteMany({tc_id:row.tcId.text})
                for(var tag of row.editedTags.selectedTags){
                    db.test_case_tag.Insert({
                        tc_id:row.tcId.text,
                        tag: tag.v,
                        platform:row.tcPlatform.text})
                }
                
            }
        }
    }
    if(form.createReport.submitter) {
		Log("Create report from created tests")

        let sheetName = "Test list";
		let list = excel.New();
		list.AddSheet(sheetName);
		list.SetValue(sheetName,0,0,"Added date");
		list.SetValue(sheetName,0,1,"Test name");
		list.SetValue(sheetName,0,2,"Link");
		let assignedTests = db.test_case.Read({addedDate:{greaterOrEqual: form.tcTable.dateSc.date.DtlToDtdb()}});
		let i = 1;
		for (let a of assignedTests) {
			list.SetValue(sheetName,i,0,a.addedDate);
			list.SetValue(sheetName,i,1,a.id);
			list.SetValue(sheetName,i,2,a.link);
			i=i+1;
		}
		let resultMediaId = list.Store("Created tests");
		smtp.SendEmail({
			recipients: [form.to.text],
			body: "",
			subject: "Created test list from "+ToString(form.tcTable.dateSc.date),
			attachments: [{fileref: fileref.Parse(resultMediaId+"|1") , filename: "Created_tests.xlsx"}]
		});

	}
}