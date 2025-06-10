//# server typescript program manualTestWriter for form manualTestWriter
//# using reftab 'manualTests';
//# using reftab 'manualTestsMedia';
//# using reftab 'test_case';
//# using reftab 'test_to_be_write_done';
//# using reftab 'test_to_be_write_tags';
//# using reftab 'test_to_be_write_tickets';


function assertNotNull<T>(value: T | null | undefined): asserts value is T {
        if (value == null) {
            throw new Error("Érték null vagy undefined");
        }
    }
{
    
    if (int.Parse(form.edit) == 0) {
        for (let step of form.newTC.rows) {
            let mediaid = null;
            let exp = step.expect.text.Trim(" ")
            let task = step.task.text.Trim(" ")
            let cId = form.createTcId.text.Trim(" ")
            let nTd = form.newTcDesc.text.Trim(" ")
            let nTp = form.newTcPrecond.text.Trim(" ")
            let ststepT = step.stepTask.text.Trim(" ")
            if (step.photoUpload.photos.Count() > 0) {
                Log(step.photoUpload.photos.Single().photoId)
                mediaid = step.photoUpload.photos.Single().photoId;
            }
            let stepT = int.Parse(ststepT);
            assertNotNull(stepT);
            db.manualTests.Insert({TestId: cId, 
                Expected: exp, 
                Task: task, 
                Step: stepT, 
                Photo: mediaid==null?0:1, 
                Platform: step.newTcPlatform.selectedKey, 
                project: form.user_proj})
            db.test_case.Update({id: cId},{tc_description: nTd, PreCond: nTp})

            if (mediaid!=null) {
                db.manualTestsMedia.Insert({
                    TestId: cId, 
                    mediaId: mediaid, 
                    Step: stepT, 
                    project: form.user_proj
                })
            }
        }
    }else{
        let nId = form.newTcId.text.Trim(" ")
        let nTd = form.newTcDesc.text.Trim(" ")
        let nTp = form.newTcPrecond.text.Trim(" ")
        if (form.deletedStep == 1) {
            db.manualTests.DeleteMany({TestId: nId, project: form.user_proj})
            db.manualTestsMedia.DeleteMany({TestId: nId, project: form.user_proj})
        }
        let inserted =-1
        for (let step of form.editTC.rows) {
            let mediaid = null;
            let insertedStep = step.iStep.submitter
            
            let exp = step.expect.text.Trim(" ")
            let task = step.task.text.Trim(" ")
            
            let stepT = step.stepTask.text.Trim(" ")

            if (insertedStep) {
                Log("Here is a new inserted step in:"+stepT)
                let tempStep = int.Parse(stepT)
                assertNotNull(tempStep);
                inserted = tempStep;
            }

            if (step.photoUpload.photos.Count() > 0) {
                Log(step.photoUpload.photos.Single().photoId)
                mediaid = step.photoUpload.photos.Single().photoId;
            }else if (step.mediaIdPhoto != null) {
                Log(step.mediaIdPhoto)
                mediaid = step.mediaIdPhoto;
            }

            db.manualTests.InsertOrUpdate({
                TestId: form.originalTestId, 
                Step: int.Parse(stepT)},{TestId: nId, 
                Expected: exp, 
                Task: task, 
                Step: int.Parse(stepT), 
                Photo: mediaid==null?0:1, 
                Platform: step.newTcPlatform.selectedKey, 
                project: form.user_proj
            })

            if (mediaid!=null) {
                db.manualTestsMedia.InsertOrUpdate({
                    TestId: nId, 
                    Step:int.Parse(stepT)},{TestId: nId, 
                    mediaId: mediaid, 
                    Step:int.Parse(stepT), 
                    project: form.user_proj

                })
            }else{
                db.manualTestsMedia.DeleteMany({TestId: nId, Step:int.Parse(stepT), project: form.user_proj})
            }
        }

        if (inserted!=-1) {
            const l = form.editTC.rows.length
            for (let index = l; index >= inserted; index--) {
                const element = form.editTC.rows[index-1]
                Log("---------------Have to move----------------")
                Log(element)
                db.manualTests.Update({
                    TestId: form.originalTestId, 
                    Step: int.Parse(element.stepCount),
                    project: form.user_proj
                },{
                    Step: int.Parse(element.stepCount+1),

                })
                if (element.mediaIdPhoto!= null) {
                    db.manualTestsMedia.Update({
                        TestId: nId, Step:int.Parse(element.stepCount),
                        project: form.user_proj
                    },{
                        Step:int.Parse(element.stepCount+1)
                    })
                }
            }
            db.manualTests.Insert({
                TestId: nId, 
                Expected: "", 
                Task: "", 
                Step: inserted, 
                Photo: 0, 
                Platform: "",
                project: form.user_proj
            })
        }

        if (form.stfromForm == "testcase_monitor") {
            db.test_case.Update({id: form.TcId.text},{tc_description: nTd, PreCond: nTp})
        } else if (form.stfromForm == "testcase_writer"){
            db.test_to_be_write_done.Update({id: form.originalTestId},{id: nId, label: nTd, PreCond: nTp})
            db.test_to_be_write_tags.UpdateMany({id: form.originalTestId},{id: nId})
            db.test_to_be_write_tickets.UpdateMany({id: form.originalTestId},{id: nId})
        }
    }
    }