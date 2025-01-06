//# server typescript program manualTestWriter for form manualTestWriter
//# using reftab 'manualTests';
//# using reftab 'manualTestsMedia';
//# using reftab 'test_case';
//# using reftab 'test_to_be_write_done';
//# using reftab 'test_to_be_write_tags';
//# using reftab 'test_to_be_write_tickets';

{
    if (int.Parse(form.edit) == 0) {
        for (let step of form.newTC.rows) {
            let mediaid = null;
            let exp = step.expect.text.Trim(" ")
            let task = step.task.text.Trim(" ")
            let cId = form.createTcId.text.Trim(" ")
            let nTd = form.newTcDesc.text.Trim(" ")
            let nTp = form.newTcPrecond.text.Trim(" ")
            let stepT = step.stepTask.text.Trim(" ")
            if (step.photoUpload.photos.Count() > 0) {
                Log(step.photoUpload.photos.Single().photoId)
                mediaid = step.photoUpload.photos.Single().photoId;
            }
            db.manualTests.Insert({TestId: cId, Expected: exp, Task: task, Step: int.Parse(stepT), Photo: mediaid==null?0:1, Platform: step.newTcPlatform.selectedKey})
            db.test_case.Update({id: cId},{desc: nTd, PreCond: nTp})

            if (mediaid!=null) {
                db.manualTestsMedia.Insert({TestId: cId, mediaId: mediaid, Step:int.Parse(stepT)})
            }
        }
    }else{
        let nId = form.newTcId.text.Trim(" ")
        let nTd = form.newTcDesc.text.Trim(" ")
        let nTp = form.newTcPrecond.text.Trim(" ")
        if (form.deletedStep == 1) {
            db.manualTests.DeleteMany({TestId: nId})
            db.manualTestsMedia.DeleteMany({TestId: nId})
        }
        for (let step of form.editTC.rows) {
            let mediaid = null;
            let exp = step.expect.text.Trim(" ")
            let task = step.task.text.Trim(" ")
            
            let stepT = step.stepTask.text.Trim(" ")

            if (step.photoUpload.photos.Count() > 0) {
                Log(step.photoUpload.photos.Single().photoId)
                mediaid = step.photoUpload.photos.Single().photoId;
            }else if (step.mediaIdPhoto != null) {
                Log(step.mediaIdPhoto)
                mediaid = step.mediaIdPhoto;
            }

            db.manualTests.InsertOrUpdate({TestId: form.originalTestId, Step: int.Parse(stepT)},{TestId: nId, Expected: exp, Task: task, Step: int.Parse(stepT), Photo: mediaid==null?0:1, Platform: step.newTcPlatform.selectedKey})

            if (mediaid!=null) {
                db.manualTestsMedia.InsertOrUpdate({TestId: nId, Step:int.Parse(stepT)},{TestId: nId, mediaId: mediaid, Step:int.Parse(stepT)})
            }else{
                db.manualTestsMedia.DeleteMany({TestId: nId, Step:int.Parse(stepT)})
            }
        }
        if (form.stfromForm == "testcase_monitor") {
            db.test_case.Update({id: form.TcId.text},{desc: nTd, PreCond: nTp})
        } else if (form.stfromForm == "testcase_writer"){
            db.test_to_be_write_done.Update({id: form.originalTestId},{id: nId, label: nTd, PreCond: nTp})
            db.test_to_be_write_tags.UpdateMany({id: form.originalTestId},{id: nId})
            db.test_to_be_write_tickets.UpdateMany({id: form.originalTestId},{id: nId})
        }
    }
    }