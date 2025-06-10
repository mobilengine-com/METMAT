-- Update the main version in the testedVersion table to 'S54'
REPLACE INTO tc_jira_list (jira_id, task_id, env_name, platform, tested_version, jira_state, mainVersion, project)
SELECT
    mtmo.jira_id,
    mtmo.task_id,
    mtmo.env_name,
    mtmo.platform,
    mtmo.tested_version,
    mtmo.jira_state,
    "S55" mainVersion,
    "Core" project
FROM tc_jira_list_old mtmo;

REPLACE INTO tc_list (tc_id, tc_prio, tc_impreg, tc_desc, last_status, last_sent_in, note, mainVersion, project)
SELECT
    mto.tc_id,
    mto.tc_prio,
    mto.tc_impreg,
    mto.tc_desc,
    mto.last_status,
    mto.last_sent_in,
    mto.note,
    "S55" mainVersion,
    "Core" project
FROM tc_list_old mto;

REPLACE INTO test_to_be_write_category (category, planned_count, finished, closedByTesters, testerWhoClosed, result_count, active, mainVersion, project)
SELECT
ttbvco.category,
ttbvco.planned_count,
ttbvco.finished,
ttbvco.closedByTesters,
ttbvco.testerWhoClosed,
ttbvco.result_count,
ttbvco.active,
"S55" mainVersion,
"Core" project
FROM test_to_be_write_category_old ttbvco;