//# server typescript program holidays for form holidaysDayOff
//# using reftab 'holidays';


if (form.Add.submitter) {
    db.holidays.Insert({categoryId:form.newEvent[0].categoryId, dateFrom:form.newEvent[0].dateFrom.DtlToDtdb(), dateTo:form.newEvent[0].dateTo.DtlToDtdb(), id:form.newEvent[0].id, user:form.newEvent[0].user})
}
if (form.Delete.submitter) {
    db.holidays.Delete({id:form.cal.selectedEvent.id})
}
