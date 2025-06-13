-- Update the main version in the testedVersion table to 'S54'
REPLACE INTO task (guid, task_id, result, version, env_name, note, start_tc_date, end_tc_date, task_type, platformID, time_need, saved, project, assigned_version)
SELECT
    tko.guid,
    tko.task_id,
    tko.result,
    tko.version,
    tko.env_name,
    tko.note,
    tko.start_tc_date,
    tko.end_tc_date,
    tko.task_type,
    tko.platformID,
    tko.time_need,
    tko.saved,
    'Core' project,
    'S56' assigned_version
FROM task_old tko;