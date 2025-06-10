//# server typescript program progressLog for schedule 0 11 * * * first run at 2024-01-04 20:00
//# using reftab 'environmentValues';
//# using reftab 'environment';
//# using reftab 'tester';
//# using reftab 'task';


import { assertNotNull, parseToFloat  } from "./lib";
{
	
	let now = dtl.Now();
	let dayofweek = now.DayOfWeek();
	let remTests = db.task.Read({ result: "not yet started" });


	if (dayofweek != 0 && dayofweek != 6 && remTests.Count() > 0) {
		let done_today = db.task.Read({ result: "success", saved: 0 });
		let failed_today = db.task.Read({ result: "failed", saved: 0 });
		let bad_test_case_today = db.task.Read({ result: "bad test case", saved: 0 });
		let failed_total = db.task.Read({ result: "failed", });
		let bad_test_case_total = db.task.Read({ result: "bad test case", });
		let done_total = db.task.Read({ result: "success" });

		let stavgtestRuntime = db.environmentValues.Read({ name: "hrAvgTestRuntime", project: form.user_proj}).Single().value as string;

		let hrAvgTestRuntime = parseToFloat(stavgtestRuntime) ;
		let holiday = parseToFloat(db.environmentValues.Read({ name: "holidays", project: form.user_proj }).Single().value as string);
		let requiredWorkingHours = remTests.Count() * hrAvgTestRuntime;
		Log(requiredWorkingHours);
		let roundDay = (requiredWorkingHours / 8).Ceiling();
		Log(roundDay);
		let endDate = now.DtlAddDays(roundDay + holiday + roundDay / 5 * 2);
		Log(endDate);
		endDate = endDate.DayOfWeek() === 0 ? endDate.DtlAddDays(1) :
			endDate.DayOfWeek() === 6 ? endDate.DtlAddDays(2) :
				endDate;

		let dtfday = dtf.Parse("yyyy\".\"MM\".\"dd\":\"ss");

		let total_today = done_today.Count() + failed_today.Count() + bad_test_case_today.Count();
		let total = done_total.Count() + failed_total.Count() + bad_test_case_total.Count();
		let imp_perc = 0;

		Log("Total compeleted test count is " + total_today)
		Log(total_today + " test are succesfull today")


		if (total_today !== 0) {
			imp_perc = (done_today.Count() / total_today) * 100;
		}
		let tc_perc = (done_total.Count() / (total) * 100).Floor();
		let sum_perc = (done_total.Count() / (total + remTests.Count()) * 100).Floor();
		Log("Succesfull rate today is " + imp_perc + "%")
		Log("Succesfull rate from all completed tests is " + tc_perc + "%")
		Log("Succesfull rate in total is " + sum_perc + "%")

		db.task.UpdateMany({ result: "success", saved: 0 }, { saved: 1 });
		db.task.UpdateMany({ result: "failed", saved: 0 }, { saved: 1 });
		db.task.UpdateMany({ result: "not tested", saved: 0 }, { saved: 1 });
		db.task.UpdateMany({ result: "bad test case", saved: 0 }, { saved: 1 });
	}

}