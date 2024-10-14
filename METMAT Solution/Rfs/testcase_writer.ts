//# server typescript program testcase_writer for form testcase_writer
//# using reftab 'test_to_be_write_category';
//# using reftab 'test_to_be_write_done';
//# using reftab 'test_to_be_write_tags';
//# using reftab 'test_case';
//# using reftab 'test_case_tag';
//# using reftab 'test_to_be_write_tickets';


{
    if(form.iFinishedStatusEdit>0){
        for(var row of form.adminPanel.tcCat.rows){
            if (row.edited) {
                if (row.toDelete) {
                    Log("Delete the following category: "+row.category.text)
                    db.test_to_be_write_done.DeleteMany({category: row.category.text})
                    db.test_to_be_write_category.Delete({category: row.category.text})
                }else{
                    if (row.progress == 0) {
                        Log("Reopen the following category: "+row.category.text)
                        db.test_to_be_write_category.Update({category: row.category.text},{finished:row.progress, result_count: row.testCount, closedByTesters: 0, testerWhoClosed:""})
                    }else{
                        Log("Edited the following category: "+row.category.text)
                        db.test_to_be_write_category.Update({category: row.category.text},{finished:row.progress, planned_count: row.testCount, result_count: row.testCount})
                    }
                }
            }else{
                if (row.editedptc) {
                    Log("Edited the following category planned test count: "+row.category.text)
                    db.test_to_be_write_category.Update({category: row.category.text},{planned_count: row.editedptcount.number})
                }
            }
        }
    }
	
    if (form.bNewTestCaseAdded) {
        for(var row of form.adminPanel.tcCat.rows){
            if (row.isNew) {
                Log("Inserting the following category: "+row.categoryNew.text)
                db.test_to_be_write_category.Insert({category: row.categoryNew.text, planned_count:row.plannedNew.number, finished:0, result_count:0, closedByTesters: 0, testerWhoClosed:""})
            }
        }
    }
    if (form.bNewLabelAdded) {
        for(var row of form.tbNewLb.rows){
            Log("Inserting the following testcases: "+row.add_tcs_id.text)
            db.test_to_be_write_done.Insert({
                category: form.drDoneTests.selectedKey,
                id:row.add_tcs_id.text,
                label:row.add_tcs_lb.text,
                status:row.add_tcs_status.selectedKey,
                type:row.add_tcs_ty.selectedKey,
                creator:form.info.user.name,
                location:row.add_tcs_lc.text,
                note:row.add_tcs_note.text,
                platform:row.add_tcs_platform.selectedKey

            })
            for(var newTag of row.add_tcs_tags.selectedTags){
                Log("Following tag added: "+newTag.v)
                db.test_to_be_write_tags.Insert({
                    id:row.add_tcs_id.text,
                    tag:newTag.v
                })
            }
        }
    }

    if (form.sbSaveEditedLabels.submitter) {
        for(var row of form.tcDone.rows){
            if (row.delete) {
                Log("Deleting the following testcase: "+row.tcDoneId.text)
                Log("Deleted by "+form.info.user.name)
                db.test_to_be_write_done.DeleteMany({id:row.tcDoneId.text})
                db.test_to_be_write_tickets.DeleteMany({id:row.tcDoneId.text})
                db.test_to_be_write_tags.DeleteMany({id:row.tcDoneId.text})
            }
            else if (row.edited) {
                Log("Updating the following testcase: "+row.tcDoneId.text)
                db.test_to_be_write_done.Update({id:row.tcDoneId.text},{
                    id:row.editedId.text,
                    status:row.editedStatus.selectedKey,
                    note: row.editedNote.text,
                    location: row.editedLocation.text,
                    type:row.editedType.selectedKey,
                    platform:row.editedPlatform.selectedKey,
                    label:row.editedLabel.text
                })
                db.test_to_be_write_tickets.DeleteMany({id:row.tcDoneId.text})
                for(var ticket of row.editTickets.rows){
                    Log("Updating the following testcase tickets: "+ticket.editedTicket.text)
                    db.test_to_be_write_tickets.Insert({
                        id:row.editedId.text,
                        ticket:ticket.editedTicket.text
                    })
                }
                db.test_to_be_write_tags.DeleteMany({id:row.tcDoneId.text})
                for(var formTag of row.editedTags.selectedTags){
                    Log("Updating the following testcase tag: "+formTag.v)
                    db.test_to_be_write_tags.Insert({
                        id:row.editedId.text,
                        tag:formTag.v
                    })
                }
               // Log("Updating the following testcase tags: "+row.tcDoneId.text)
               // var currentTags = db.test_to_be_write_tags.Read({id:row.tcDoneId.text})
               // var content = currentTags.map(e=> e.tag)
               // for(var formTag of row.editedTags.selectedTags){
               //     Log("The current tag is: "+formTag.v )
               //     
               //     Log("The current tag in db is: "+content )
               //     if (content.includes(formTag.v)) {
               //         db.test_to_be_write_tags.Insert({
               //             id:row.tcDoneId.text,
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

            db.test_case.Insert({
                id: testCase.id,
                desc: testCase.label,
                platform: testCase.platform,
                link: testCase.location,
                time: 0,
                addedDate: dtl.Now().DtlToDtdb()
            })
            var tcTags = db.test_to_be_write_tags.Read({id:testCase.id})
            for(var tag of tcTags){
               
                db.test_case_tag.Insert({
                    tc_id: testCase.id,
                    tag: tag.tag,
                    platform: testCase.platform
                })
            }
           
        }
        Log(counter+" Manual test added to database")
    }
    
}