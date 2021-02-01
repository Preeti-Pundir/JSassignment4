Qualtrics.SurveyEngine.addOnReady(function()
{
var dob_entry = getTextValue();
var split_dob = dob_entry.split("/");
var month = split_dob[0];
var day = split_dob[1];
var year = split_dob[2];
var dob_asdate = new Date(year, month, day);
var today = new Date();
var mili_dif = Math.abs(today.getTime() - dob_asdate.getTime());
var age = (mili_dif / (1000 * 3600 * 24 * 365.25));
within_age_range=(14<age & age<24);

alert(age);
});