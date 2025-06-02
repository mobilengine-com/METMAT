-- Update the main version in the testedVersion table to 'S54'
INSERT INTO testedVersion (version, platformID, mainVersion, mainVersion_test, addedDate)
SELECT
    vo.version,
    vo.platformID,
    vo.mainVersion,
    'unset' mainVersion_test,
    vo.addedDate
FROM testedVersion_old vo;