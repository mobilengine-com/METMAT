-- 8.0.17

UPDATE `versions` SET version = 'v1' WHERE version IS NULL;
UPDATE `versions` SET project = 'v1' WHERE project IS NULL;