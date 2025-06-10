//# server typescript program testCasesLinks for form tclinks
//# using reftab task;
//# using reftab test_case;
//# using reftab test_case_tag;
//# using reftab tc_list;
{
	//var act_task_type= form.dd_task_type.selectedKey;
	//trace form;
	if(form.assignBtn.submitter) {
		//var act_env_name = form.selected_tester.CHOICE!!!!!!!!
		for(var tcsTableRow of form.tcs.rows){
			var act_task_id = tcsTableRow.tcsid.text;
			var act_env_name = form.selected_environment.selectedKey; //form
			var act_tc_platform = tcsTableRow.tcsplatform.text;
			var act_tc_timeneed = tcsTableRow.time_need.text;

			if (tcsTableRow.mark_to_run.checked) {
				Log("upload "+act_task_id+" TC for "+act_env_name);
				db.test_case.Update({id: act_task_id,platform: act_tc_platform},{lastAssigned: dtl.Now().DtlToDtdb()});
				db.task.Insert({guid: guid.Generate().ToStringN(), task_id: act_task_id, env_name: act_env_name, result: "not yet started", task_type: "t",platformID: act_tc_platform, time_need: act_tc_timeneed, saved: 0, assigned_version: form.currentVersion, project: form.user_proj});
				db.tc_list.InsertOrUpdate({tc_id: act_task_id},
				{tc_id: act_task_id, tc_prio: "1", tc_impreg: "imp", tc_desc: tcsTableRow.tcsdesc.text});
				
			}		
		}
	}

	if(form.wipe_assignement.submitter) {
		db.task.DeleteMany({})
	}

	if(form.save_tags.submitter) {
		//var act_env_name = form.selected_tester.CHOICE!!!!!!!!
		//delete all selected tags from reftable
		
		for(var tcsTableRow of form.tcs.rows){
			for(var tags of db.test_case_tag.Read({tc_id: tcsTableRow.tcsid.text})) {
			
				Log(tags);
				//trace envTableTRow.tgs.selectedTags;
				db.test_case_tag.Delete(tags);


			}
			//newly insert all selected tags to reftable
			for(var newtags of tcsTableRow.tags_ctr.selectedTags) {
				Log(newtags);
				db.test_case_tag.Insert({tc_id: tcsTableRow.tcsid.text, platform: tcsTableRow.tcsplatform.text, tag: newtags.v});
			}
		}
	}

	if(form.prMove.submitter) {
		Log("MOVE")
		for(var ob of form.assignedTb.rows){
			if (ob.edited) {
				Log("Move "+ob.move_task.text)
				db.task.Update({guid: ob.move_task_guid.text},{env_name: ob.selected_environment_to_move.selectedKey});
			}
		}
	}
	if(form.prDelete.submitter) {
		Log("DELETE")
		for(var ob of form.assignedTb.rows){
			if (ob.delete) {
				Log("Deleted "+ob.move_task.text)
				db.task.Delete({guid: ob.move_task_guid.text});
			}
		}
	}
}