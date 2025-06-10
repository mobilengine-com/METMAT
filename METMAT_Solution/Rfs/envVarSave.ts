//# server typescript program envVarSave for form enviromentVariableEdit
//# using reftab 'environmentValues';

for (let row of form.envVariableTb.rows) {
   db.environmentValues.Update({name:row.envName.text, project: form.user_proj},{value:row.envValue.text})
}