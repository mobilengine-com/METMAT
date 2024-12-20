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
            if (step.photoUpload.photos.Count() > 0) {
                Log(step.photoUpload.photos.Single().photoId)
                mediaid = step.photoUpload.photos.Single().photoId;
            }
            Log(step.expect.text)
            Log(step.task.text)
            db.manualTests.Insert({TestId: form.createTcId.text, Expected: step.expect.text, Task: step.task.text, Step: int.Parse(step.stepTask.text), Photo: mediaid==null?0:1, Platform: step.newTcPlatform.selectedKey})
            db.test_case.Update({id: form.createTcId.text},{desc: form.newTcDesc.text, PreCond: form.newTcPrecond.text})

            if (mediaid!=null) {
                db.manualTestsMedia.Insert({TestId: form.createTcId.text, mediaId: mediaid, Step:int.Parse(step.stepTask.text)})
            }
        }
    }else{
        if (form.deletedStep == 1) {
            db.manualTests.DeleteMany({TestId: form.newTcId.text})
            db.manualTestsMedia.DeleteMany({TestId: form.newTcId.text})
        }
        for (let step of form.editTC.rows) {
            let mediaid = null;
            if (step.photoUpload.photos.Count() > 0) {
                Log(step.photoUpload.photos.Single().photoId)
                mediaid = step.photoUpload.photos.Single().photoId;
            }else if (step.mediaIdPhoto != null) {
                Log(step.mediaIdPhoto)
                mediaid = step.mediaIdPhoto;
            }
            Log(step.expect.text)
            Log(step.task.text)

            db.manualTests.InsertOrUpdate({TestId: form.originalTestId, Step: int.Parse(step.stepTask.text)},{TestId: form.newTcId.text, Expected: step.expect.text, Task: step.task.text, Step: int.Parse(step.stepTask.text), Photo: mediaid==null?0:1, Platform: step.newTcPlatform.selectedKey})

            if (mediaid!=null) {
                db.manualTestsMedia.InsertOrUpdate({TestId: form.newTcId.text, Step:int.Parse(step.stepTask.text)},{TestId: form.newTcId.text, mediaId: mediaid, Step:int.Parse(step.stepTask.text)})
            }else{
                db.manualTestsMedia.DeleteMany({TestId: form.newTcId.text, Step:int.Parse(step.stepTask.text)})
            }
        }
        if (form.stfromForm == "testcase_monitor") {
            db.test_case.Update({id: form.TcId.text},{desc: form.newTcDesc.text, PreCond: form.newTcPrecond.text})
        } else if (form.stfromForm == "testcase_writer"){
            db.test_to_be_write_done.Update({id: form.originalTestId},{id: form.newTcId.text, label: form.newTcDesc.text, PreCond: form.newTcPrecond.text})
            db.test_to_be_write_tags.Update({id: form.originalTestId},{id: form.newTcId.text})
            db.test_to_be_write_tickets.Update({id: form.originalTestId},{id: form.newTcId.text})
        }
    }
    }