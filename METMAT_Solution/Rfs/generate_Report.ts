//# server program 'generate_Report' for form generate_Report
//# using report 'generate_Report';
//# using reftab 'test_case';
{
	Log(form);
	if(form.generateTcReport.submitter){
		let rep = reports.generate_Report.New();
		rep.Params.Add({
			name: form.name.text,
			filterdate: form.filterdate.date.DtlToDtdb(),
			project: form.user_proj,
			version: form.currentVersion
		});
		rep.Run(); 
	}else if(form.generateAssignedTcList.submitter){
		let sheetName = "Assigned test list";
		let list = excel.New();
		list.AddSheet(sheetName);
		list.SetValue(sheetName,0,0,"Assigned date");
		list.SetValue(sheetName,0,1,"Test name");
		list.SetValue(sheetName,0,2,"Link");
		let assignedTests = db.test_case.Read({lastAssigned:{greaterOrEqual: form.filterdate.date.DtlToDtdb()}, project: form.user_proj});
		let i = 1;
		for (let a of assignedTests) {
			list.SetValue(sheetName,i,0,a.lastAssigned);
			list.SetValue(sheetName,i,1,a.id);
			list.SetValue(sheetName,i,2,a.link);
			i=i+1;
		}
		let resultMediaId = list.Store("Assigned tests");
		smtp.SendEmail({
			recipients: [form.to.text],
			body: "",
			subject: "Assigned test list "+ToString(form.filterdate.date),
			attachments: [{fileref: fileref.Parse(resultMediaId+"|1") , filename: "Assigned_tests_"+form.user_proj+".xlsx"}]
		});
	
	}
	
}
