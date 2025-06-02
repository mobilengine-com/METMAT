//# server typescript program dashboard for form dashboard
//# using reftab 'tester';
//# using reftab 'holidays';
//# using reftab 'environmentValues';
//# using reftab 'task';
//# using reftab 'test_to_be_write_category';
//# using reftab 'test_to_be_write_done';
//# using reftab 'calculatedResults';


import { assertNotNull, parseToFloat  } from "./lib";
let nowHour = form.info.dtlSubmit.Hour
let nowMinute = form.info.dtlSubmit.Minute

let holidayAdvancedInPeriod

let left_from_today_hour = nowHour >= 9 ? nowHour >= 17 ? 0 : 16-nowHour : 8
let left_from_today_minute = nowHour >= 9 ? nowHour >= 17 ? 0 : 60-nowMinute : 0
let left_from_today_total = left_from_today_hour+left_from_today_minute/60
let stavgRunTime = db.environmentValues.Read({name:"hrAvgTestRuntime"})[0].value as string

let avgRunTime = parseToFloat(stavgRunTime)
Log(form)



function calculateHolidays( prew_date:dtl, new_date:dtl) {
    let holiday = db.holidays.Read({user: "ALL", dateFrom:{greaterOrEqual: prew_date.DtlToDtdb(), lessOrEqual: new_date.DtlToDtdb()}}).Count()
    Log("Found holidays: "+holiday+ " from: "+ prew_date+ " to: "+new_date)

    return holiday;
}

function calculateFinish(req_days:number, holidays:number, currentDate:dtl, acumulated_holidays:number): dtl {
    let end_days = req_days+holidays+req_days/5*2
    let end = currentDate.DtlAddDays(end_days)
    Log("-----------------------End: "+end+"-------------------")
    let end_with_week_ends = end.DayOfWeek() == 0 ? end.DtlAddDays(1) : end.DayOfWeek() == 6 ? end.DtlAddDays(2) : end ;
    let calc_holidays = calculateHolidays(currentDate, end_with_week_ends)

    if (calc_holidays > 0) {
        acumulated_holidays +=calc_holidays
        return calculateFinish(0,calc_holidays,end_with_week_ends, acumulated_holidays)
    }else{
        return end_with_week_ends
    }
}
for (let element of form.changeppop.projectTable.rows) {
    if (element.changeProjectSubmit.submitter) {
        db.tester.Update({tester_email: form.info.user.name}, {selected_project: element.project.text})
    }
}

if (form.recRun.submitter) {
    let testerForTesting = db.tester.Read({work_type: "Testing", tester_active: "Active"})
    let sum_participate = 0
    testerForTesting.forEach(a => {
        if (a && a.participation != null) {
            sum_participate += a.participation;
        }
    });
    
    Log("avgTime "+ avgRunTime)
    let done_task_sum_count = db.task.Read({result:["success", "bad test case", "failed"]}).Count()
    Log("done_task_sum_count "+ done_task_sum_count)
    let remaining_task_count = db.task.Read({result: "not yet started"}).Count()
    Log("remaining_task_count "+ remaining_task_count)
    
    let requiredWorkingHours = 0;
    if (remaining_task_count != 0) {
        requiredWorkingHours= ((remaining_task_count) * avgRunTime)/sum_participate
    }
    let requiredWorkingHoursOrN = float.Parse(requiredWorkingHours.toFixed(2))
    if (requiredWorkingHoursOrN === undefined) {
        throw new Error("requiredWorkingHoursOrN is undefined");
    }
    requiredWorkingHours = requiredWorkingHoursOrN
    Log("requiredWorkingHours "+requiredWorkingHours)
    let more_day_then_today = requiredWorkingHours-left_from_today_total>0 ? requiredWorkingHours-left_from_today_total : 0; 
    let round_days = Math.ceil(more_day_then_today/8)
    Log("round_days "+round_days)
    let finish_date = calculateFinish(round_days, 0, form.info.dtlSubmit, 0)
    Log("finish_date "+finish_date)

    if (db.calculatedResults.Read({Type: "Run"}).Count() == 1) {
        db.calculatedResults.Update({Type: "Run"},{
            participate: sum_participate,
            totalCount: done_task_sum_count+remaining_task_count,
            doneCount: done_task_sum_count,
            leftCount: remaining_task_count,
            requiredHours: requiredWorkingHours,
            requiredDays: round_days,
            finishDate: finish_date.DtlToDtdb()
        })
    }else{
        db.calculatedResults.Insert({Type: "Run",
            participate: sum_participate,
            totalCount: done_task_sum_count+remaining_task_count,
            doneCount: done_task_sum_count,
            leftCount: remaining_task_count,
            requiredHours: requiredWorkingHours,
            requiredDays: round_days,
            finishDate: finish_date.DtlToDtdb()})
    }
}   

if (form.recWrite.submitter) {
    let dbTesterForTesting = db.tester.Read({work_type: "Test writing", tester_active: "Active"})
    let sum_participate = 0
    dbTesterForTesting.forEach(a => {
        assertNotNull(a.participation);
        sum_participate += a.participation as number
        return sum_participate
    });
    Log("sum_participate: "+sum_participate)
    let totalTestToWriteCount = 0
    db.test_to_be_write_category.ReadFields({active: 1},["planned_count"]).forEach(a=> {
        assertNotNull(a.planned_count);
        totalTestToWriteCount += a.planned_count as number
        return totalTestToWriteCount
    })
    
    Log("totalTestToWriteCount "+totalTestToWriteCount)
    let totalTestWriteDone = db.test_to_be_write_done.Read({status: "Done"}).Count()
    Log("totalTestWriteDone "+totalTestWriteDone)
    let requiredWorkingHoursToWrite = 0
    if (totalTestToWriteCount != 0) {
        let temp = float.Parse((((totalTestToWriteCount - totalTestWriteDone) * avgRunTime)/sum_participate).toFixed(2))
        if (temp === undefined) {
            throw new Error("requiredWorkingHoursToWrite is undefined");
        }
        requiredWorkingHoursToWrite = temp
    }
    Log("requiredWorkingHoursToWrite "+requiredWorkingHoursToWrite)
    let more_day_then_today = requiredWorkingHoursToWrite-left_from_today_total>0 ? requiredWorkingHoursToWrite-left_from_today_total : 0; 
    let round_days = Math.ceil(more_day_then_today/8)
    Log("round_days "+round_days)
    let finish_date = calculateFinish(round_days, 0, form.info.dtlSubmit, 0)
    Log("finish_date "+finish_date)
    let finish_date_plus_extra_time = calculateFinish(round_days+12, 0, form.info.dtlSubmit, 0)
    Log("finish_date_plus_extra_time "+finish_date_plus_extra_time)

    if (db.calculatedResults.Read({Type: "Write"}).Count() == 1) {
        db.calculatedResults.Update({Type: "Write"},{
            participate: sum_participate,
            totalCount: totalTestToWriteCount,
            doneCount: totalTestWriteDone,
            leftCount: totalTestToWriteCount-totalTestWriteDone,
            requiredHours: requiredWorkingHoursToWrite,
            requiredDays: round_days,
            finishDate: finish_date.DtlToDtdb(),
            finishDateExtended: finish_date_plus_extra_time.DtlToDtdb()
        })
    }else{
        db.calculatedResults.Insert({Type: "Write",
            participate: sum_participate,
            totalCount: totalTestToWriteCount,
            doneCount: totalTestWriteDone,
            leftCount: totalTestToWriteCount-totalTestWriteDone,
            requiredHours: requiredWorkingHoursToWrite,
            requiredDays: round_days,
            finishDate: finish_date.DtlToDtdb(),
            finishDateExtended: finish_date_plus_extra_time.DtlToDtdb()
        })
    }
    
}
if (form.savePlannedWrite.submitter) {
    let currnet = db.calculatedResults.Read({Type: "Write"})
    db.calculatedResults.Update({Type: "Write"},{plannedFinish: currnet[0].finishDateExtended})
}
if (form.savePlannedRun.submitter) {
    let currnet = db.calculatedResults.Read({Type: "Run"})
    db.calculatedResults.Update({Type: "Run"},{plannedFinish: currnet[0].finishDate})
}
