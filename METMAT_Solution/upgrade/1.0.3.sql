-- Update the main version in the testedVersion table to 'S54'
UPDATE tester
SET selected_project = 'Core';

INSERT INTO versions (project, version, current)
VALUES ('Core', 'S56', 1);