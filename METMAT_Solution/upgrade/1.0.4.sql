-- Update the main version in the testedVersion table to 'S54'
REPLACE INTO testedVersion (version, platformID, mainVersion, addedDate)
SELECT
    tvo.version,
    tvo.platformID,
    'S56' mainVersion,
    tvo.addedDate
FROM testedVersion_old tvo;