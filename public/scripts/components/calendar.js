import moment from 'moment';
import Ractive from 'ractive';
import _ from 'lodash';
import './calendar_controls.js';
import './view_controls.js';
import './day_view.js';
import './month_view.js';
import './week_view.js';

import './calendar.less';

Ractive.components.Calendar = Ractive.extend({
  isolated: true,
  template: require('./calendar.html'),
  data() {
    return {
      date: moment().startOf('day'),
      events: [],
      view: 'MONTH'
    }
  },
  computed: {
    selected() {
      return this.get('date');
    },
    // First day shown in calendar
    startDate() {
      let { date, view } = this.get();
      switch (view) {
        case 'DAY':
          return date;
        case 'WEEK':
          return moment(date).startOf('week');
        // MONTH
        default:
          return moment(date)
            .startOf('month')
            .startOf('week');
      }
    },
    // Last day shown in calendar
    endDate() {
      let { date, view } = this.get();
      switch (view) {
        case 'DAY':
          return date;
        case 'WEEK':
          return moment(date).endOf('week');
        default: // MONTH
          return moment(date)
            .endOf('month')
            .add(1, 'weeks')
            .endOf('week');
      }
    },
    days() {
      let current_date = this.get('date');
      let startDate = this.get('startDate').clone();
      let endDate = this.get('endDate');
      let today = moment().startOf('day');

      let events = this.get('events');
      let eventsByDay = _.groupBy(events, 'date');
      
      // Generate calendar days:
      let days = [];
      do {
        var date = startDate.clone();
        var day = {
          day: date,
          date: date.toDate(),
          past: date.isBefore(today),
          today: date.isSame(today, 'day'),
          same_month: date.isSame(current_date, 'month'),
          future: date.isAfter(today),
          first: date.date() == 1,
          events: eventsByDay[date.format('YYYY-MM-DD')] // TODO temp
        }

        days.push(day);
        startDate.add(1, 'days');
      } while (startDate.isBefore(endDate));
      return days;
    },
    weeks() {
      let days = this.get('days');
      // Chunk into list of weeks:
      let weeks = [];
      for (var i = 0, len = days.length; i < len; i += 7) {
        weeks.push(days.slice(i, i + 7));
      }
      return weeks;
    }
  },
  oninit() {
    // Listen for UI click events
    this.on({
      back() {
        let { date, view } = this.get();
        switch (view) {
          case 'DAY':
            date.add(-1, 'days');
            break;
          case 'WEEK':
            date.add(-1, 'weeks');
            break;
          default:
            date.add(-1, 'months');
        }
        this.set({ date: date });
      },
      forward() {
        let { date, view } = this.get();
        switch (view) {
          case 'DAY':
            date.add(1, 'days');
            break;
          case 'WEEK':
            date.add(1, 'weeks');
            break;
          default:
            date.add(1, 'months');
        }
        this.set({ date: date });
      },
      today() {
        let today = moment().startOf('day');
        this.set({ date: today });
      },
      view: (e, view) => this.set({ view: view }),

      select(e, date) {
        this.set({ date: date.day });
        return true;
      }
    });
  }
});
