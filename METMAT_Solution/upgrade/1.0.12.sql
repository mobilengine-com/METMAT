
INSERT INTO environmentValues (name, value, project)
SELECT
    evo.name,
    evo.value,
    evo.project
FROM environmentValues_old evo;