-- Update the main version in the testedVersion table to 'S54'

UPDATE tc_jira_list
SET mainVersion = "S56", project = "Core";

UPDATE tc_list
SET mainVersion = "S56", project = "Core";

UPDATE test_to_be_write_category
SET mainVersion = "S56", project = "Core";