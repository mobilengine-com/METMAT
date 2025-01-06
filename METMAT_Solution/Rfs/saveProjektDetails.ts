//#server typescript program saveProjektDetails for form projektDetails
//#using reftab environment;
//#using reftab testedVersion;

{
	let now = dtl.Now();
	let dtfday = dtf.Parse("yyyy\".\"MM\".\"dd\" \"HH\":\"mm\":\"ss");
	for (let row of form.tbEnviromnents.rows) {
		if (row.new == 1) {
			db.environment.Insert({env_name: row.envName.text,
				tester_email: row.envTesterMail.text, 
				tester_name: row.envTestername.text, 
				env_detail: row.envDetail.text});
		}
		if (row.deleted == 1) {
			db.environment.Delete({env_name: row.envName.text})
		}
	} 

	for (let row of form.tbVersions.rows) {
		if (row.new == 1) {
			db.testedVersion.Insert({
				version: row.verName.text,
				platformID: row.verPlatform.text,
				addedDate: dtl.Parse(dtfday, now.Format(dtfday)).DtlToDtdb()
			});
		}
		if (row.deleted == 1) {
			db.testedVersion.Delete({version: row.verName.text, platformID:  row.verPlatform.text})
		}
	} 
}
