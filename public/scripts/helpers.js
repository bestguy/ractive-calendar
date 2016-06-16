import Ractive from 'ractive';
let helpers = Ractive.defaults.data;

/*
 * Formats a date using the specified format.
 */
import moment from 'moment';

function sameDay(a, b) {
  return a && b && a.getTime() == b.getTime();
}
helpers.sameDay = sameDay;

/*
 * Returns localized weekday name
 */
function weekday(day) {
  return moment().isoWeekday(parseInt(day));
}

helpers.weekday = weekday;
