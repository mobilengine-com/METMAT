-- Update the main version in the testedVersion table to 'S54'
REPLACE INTO calculatedResults (Type, participate, totalCount, doneCount, leftCount, requiredHours, requiredDays, finishDate, finishDateExtended, plannedFinish, project, version)
SELECT
    cro.Type,
    cro.participate,
    cro.totalCount,
    cro.doneCount,
    cro.leftCount,
    cro.requiredHours,
    cro.requiredDays,
    cro.finishDate,
    cro.finishDateExtended,
    cro.plannedFinish,
    "Core" project,
    "S55" version
FROM calculatedResults_old cro;