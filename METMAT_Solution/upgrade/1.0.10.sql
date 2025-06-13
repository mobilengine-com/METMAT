-- Update the main version in the testedVersion table to 'S54'
INSERT INTO testingChecklist (id, done, task, ordernum, project)
SELECT
    mtmo.id,
    mtmo.done,
    mtmo.task,
    mtmo.ordernum,
    "Core" project
FROM testingChecklist_old mtmo;