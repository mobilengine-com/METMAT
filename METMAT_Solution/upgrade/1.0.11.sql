-- Update the main version in the testedVersion table to 'S54'
INSERT INTO userState (tester_name, active_project)
SELECT
    tto.tester_name as tester_name,
    tto.selected_project as active_project
FROM tester_old tto;


INSERT INTO userRole (tester_email, role, project)
SELECT
    tto.tester_email,
    tto.tester_role as role,
    tto.selected_project as project
FROM tester_old tto;