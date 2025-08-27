
INSERT INTO testedVersion (version, platformID, mainVersion, addedDate)
SELECT
    evo.version,
    evo.platformID,
    evo.mainVersion,
    evo.addedDate
FROM testedVersion_old evo;