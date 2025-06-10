//# server typescript program testcase_writer for form testcase_writer
//# using reftab 'test_to_be_write_category';
//# using reftab 'test_to_be_write_done';
//# using reftab 'test_to_be_write_tags';
//# using reftab 'test_case';
//# using reftab 'test_case_tag';
//# using reftab 'test_to_be_write_tickets';


{
    Log(form.adminPanel.tcCat.rows)
    if(form.iFinishedStatusEdit>0){
        for(var row of form.adminPanel.tcCat.rows){
            let catName = row.category.text.Trim(" ");
            if (row.edited) {
                if (row.toDelete) {
                    Log("Delete the following category: "+catName)
                    db.test_to_be_write_done.DeleteMany({category: catName})
                    db.test_to_be_write_category.Delete({category: catName, mainVersion: form.currentVersion, project: form.user_proj})
                }else{
                    if (row.progress == 0) {
                        Log("Reopen the following category: "+catName)
                        db.test_to_be_write_category.Update({category: catName, mainVersion: form.currentVersion, project: form.user_proj},{finished:row.progress, result_count: row.testCount, closedByTesters: 0, testerWhoClosed:""})
                    }else{
                        Log("Edited the following category: "+catName+" progress")
                        db.test_to_be_write_category.Update({category: catName, mainVersion: form.currentVersion, project: form.user_proj},{finished:row.progress, planned_count: row.testCount, result_count: row.testCount})
                    }
                }
            }else{
                if (row.editedptc) {
                    Log("Edited the following category: "+catName)
                    db.test_to_be_write_category.Update({category: catName, mainVersion: form.currentVersion, project: form.user_proj},{planned_count: row.editedptcount.number, active: row.activeEdited.checked?1:0})
                }
            }
        }
    }
	
    if (form.bNewTestCaseAdded) {
        for(var row of form.adminPanel.tcCat.rows){
            if (row.isNew) {
                let newCatName = row.categoryNew.text.Trim(" ");
                Log("Inserting the following category: "+newCatName)
                db.test_to_be_write_category.Insert({category: newCatName, planned_count:row.plannedNew.number, finished:0, result_count:0, closedByTesters: 0, testerWhoClosed:"", active: row.activeNew.checked?1:0, mainVersion: form.currentVersion, project: form.user_proj})
            }
        }
    }
    if (form.bNewLabelAdded) {
        for(var row of form.tbNewLb.rows){
            Log("Inserting the following testcases: "+row.add_tcs_id.text.Trim(" "))
            db.test_to_be_write_done.Insert({
                category: form.drDoneTests.selectedKey,
                id:row.add_tcs_id.text.Trim(" "),
                label:row.add_tcs_lb.text.Trim(" "),
                status:row.add_tcs_status.selectedKey,
                type:row.add_tcs_ty.selectedKey,
                creator:form.info.user.name,
                location:row.add_tcs_lc.text.Trim(" "),
                note:row.add_tcs_note.text.Trim(" "),
                platform:row.add_tcs_platform.selectedKey

            })
            for(var newTag of row.add_tcs_tags.selectedTags){
                Log("Following tag added: "+newTag.v)
                db.test_to_be_write_tags.Insert({
                    id:row.add_tcs_id.text.Trim(" "),
                    tag:newTag.v
                })
            }
        }
    }

    if (form.sbSaveEditedLabels.submitter) {
        for(var row of form.tcDone.rows){
            let tcId = row.tcDoneId.text.Trim(" ")
            if (row.delete) {
                Log("Deleting the following testcase: "+tcId)
                Log("Deleted by "+form.info.user.name)
                db.test_to_be_write_done.DeleteMany({id:tcId})
                db.test_to_be_write_tickets.DeleteMany({id:tcId})
                db.test_to_be_write_tags.DeleteMany({id:tcId})
            }
            else if (row.edited) {
                Log("Updating the following testcase: "+tcId)
                db.test_to_be_write_done.Update({id:tcId},{
                    id:row.editedId.text.Trim(" "),
                    status:row.editedStatus.selectedKey,
                    note: row.editedNote.text.Trim(" "),
                    location: row.editedLocation.text.Trim(" "),
                    type:row.editedType.selectedKey,
                    platform:row.editedPlatform.selectedKey,
                    label:row.editedLabel.text.Trim(" ")
                })
                db.test_to_be_write_tickets.DeleteMany({id:tcId})
                for(var ticket of row.editTickets.rows){
                    Log("Updating the following testcase tickets: "+ticket.editedTicket.text.Trim(" "))
                    db.test_to_be_write_tickets.Insert({
                        id:row.editedId.text.Trim(" "),
                        ticket:ticket.editedTicket.text.Trim(" ")
                    })
                }
                db.test_to_be_write_tags.DeleteMany({id:tcId})
                for(var formTag of row.editedTags.selectedTags){
                    Log("Updating the following testcase tag: "+formTag.v)
                    db.test_to_be_write_tags.Insert({
                        id:row.editedId.text.Trim(" "),
                        tag:formTag.v
                    })
                }
               // Log("Updating the following testcase tags: "+tcId)
               // var currentTags = db.test_to_be_write_tags.Read({id:tcId})
               // var content = currentTags.map(e=> e.tag)
               // for(var formTag of row.editedTags.selectedTags){
               //     Log("The current tag is: "+formTag.v )
               //     
               //     Log("The current tag in db is: "+content )
               //     if (content.includes(formTag.v)) {
               //         db.test_to_be_write_tags.Insert({
               //             id:tcId,
               //             tag:formTag.v
               //         })
               //     }
               // }
            }
        }
    }

    if(form.sbCloseCategory.submitter) {
        Log("The following user want to close "+form.drDoneTests.selectedKey+" category: "+form.info.user.name)
        db.test_to_be_write_category.Update({category:form.drDoneTests.selectedKey},{closedByTesters:1, testerWhoClosed:form.info.user.name})
    }
    if (form.adminPanel.sbSaveToDb.submitter) {
        var newTestCases = db.test_to_be_write_done.Read({type:"Manual"})
        var counter = 0;
        for(var testCase of newTestCases){
            counter=counter+1;
            Log(testCase.id)
            try{
                db.test_case.Insert({
                    id:             testCase.id,
                    tc_description: testCase.label,
                    platform:       testCase.platform as string,
                    link:           testCase.location,
                    time:           0,
                    addedDate:      dtl.Now().DtlToDtdb(),
                    PreCond:        testCase.PreCond,
                    project:        form.user_proj
                })
                var tcTags = db.test_to_be_write_tags.Read({id:testCase.id})
                for(var tag of tcTags){
                   
                    db.test_case_tag.Insert({
                        tc_id: testCase.id,
                        tag: tag.tag,
                        platform: testCase.platform as string
                    })
                }
            }catch{
                Log("Failed to add: "+ testCase.id)
            }
           
        }
        Log(counter+" Manual test added to database")
        db.test_to_be_write_category.DeleteMany({})
        db.test_to_be_write_done.DeleteMany({})
        Log("Delete all temporally test data")
    }
    
}