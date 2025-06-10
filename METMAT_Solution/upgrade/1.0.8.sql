-- Update the main version in the testedVersion table to 'S54'
REPLACE INTO manualTestsMedia (TestId, mediaId, Step, project)
SELECT
    mtmo.TestId,
    mtmo.mediaId,
    mtmo.Step,
    "Core" project
FROM manualTestsMedia_old mtmo;

REPLACE INTO manualTests (TestId, Step, Expected, Task, Photo, Platform, project)
SELECT
    mto.TestId,
    mto.Step,
    mto.Expected,
    mto.Task,
    mto.Photo,
    mto.Platform,
    "Core" project
FROM manualTests_old mto;

REPLACE INTO environmentValues (name, value, project)
SELECT
    evo.name,
    evo.value,
    "Core" project
FROM environmentValues_old evo;
