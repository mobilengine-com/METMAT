//# server typescript program testcase_monitor for form testcase_monitor
//# using reftab 'test_case';
//# using reftab 'test_case_tag';

{
    Log(form.addtest)
    if (form.addtest.saveMissingTests.submitter) {
        Log("Save missing test")
        for(var row of form.addtest.tbNewLb.rows){
            Log(row.add_tcs_id.text)
            db.test_case.Insert({
                id:         row.add_tcs_id.text,
                desc:       row.add_tcs_dc.text,
                platform:   row.add_tcs_platform.selectedKey,
                link:       row.add_tcs_link.text,
                time:       row.add_tcs_time.number,
                addedDate:  dtl.Now().DtlToDtdb()
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
                db.test_case_tag.DeleteMany({tc_id:row.tcId.text})
                db.test_case.Delete({id:row.tcId.text})
            }else if (row.edited) {
                Log("Edited "+row.tcId.text)
                db.test_case.Update({id:row.tcId.text},{
                    desc:row.tcEditedDesc.text,
                    link:row.tcEditedLink.text,
                    time:row.nbEditedTime.number})
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
}