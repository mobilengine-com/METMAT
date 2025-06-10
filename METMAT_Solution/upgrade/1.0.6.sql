-- Update the main version in the testedVersion table to 'S54'
REPLACE INTO test_case (id, tc_description, platform, link, time, addedDate, lastAssigned, PreCond, project)
SELECT
    tco.id,
    tco.desc tc_description,
    tco.platform,
    tco.link,
    tco.time,
    tco.addedDate,
    tco.lastAssigned,
    tco.PreCond,
    'Core' project
FROM test_case_old tco;