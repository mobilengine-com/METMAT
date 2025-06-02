//# server typescript program version_control for form version_control
//# using reftab 'versions';
{
	Log(form)
    if (form.addNewProj.sbnewProjectName.submitter) {
        Log("Adding new project: " + form.addNewProj.newProjectName.text + " with version: " + form.addNewProj.newProjFirstVersionName.text);
        db.versions.Insert({version:form.addNewProj.newProjFirstVersionName.text ,  current: 0, project:form.addNewProj.newProjectName.text})
    }
    if (form.addNewVer.sbnewVersionName.submitter) {
        Log("Adding new version: " + form.addNewVer.newVersionName.text + " to project: " + form.addNewVer.newVersionProject.selectedKey);
        db.versions.Insert({version: form.addNewVer.newVersionName.text,  current: 0, project: form.addNewVer.newVersionProject.selectedKey})
    }
    for (let element of form.versionsTable.rows) {
        if (element.setTesting.submitter) {
            Log("Setting version: " + element.version.text + " of project: " + form.selectedproject.selectedKey + " to testing");
            let currentVersiuon = db.versions.Read({ current: 1, project: form.selectedproject.selectedKey});

            if (currentVersiuon.length === 1) {
                db.versions.Update({current: 1, project: form.selectedproject.selectedKey}, {current: 0});
                Log("Setting current version to 0 for project: " + form.selectedproject.selectedKey);
            }
            db.versions.Update({version: element.version.text, project: form.selectedproject.selectedKey}, {current: 1});
            
        }
    }
}