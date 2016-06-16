import moment from 'moment';
import Ractive from 'ractive';
import _ from 'lodash';
import './calendar_controls.js';
import './month.js';

import './calendar.less';

Ractive.components.Calendar = Ractive.extend({
  template: require('./calendar.html'),
  data() {
    return {
      date: moment().startOf('day'),
      events: []
    }
  },
  computed: {
    selected() {
      return this.get('date');
    },
    // First day shown in calendar
    startDate() {
      let today = this.get('date');
      return moment(today)
        .startOf('month')
        .startOf('week');
    },
    // Last day shown in calendar
    endDate() {
      let today = this.get('date');
      return moment(today)
          .endOf('month')
          .add(1, 'weeks')
          .endOf('week');
    },
    weeks() {
      let startDate = this.get('startDate').clone();
      let endDate = this.get('endDate');
      let today = moment().startOf('day');

      let events = this.get('events');
      let eventsByDay = _.groupBy(events, 'date');
      
      // Generate calendar days:
      let days = [];
      while (startDate.isBefore(endDate)) {
        var date = startDate.clone();
        var day = {
          day: date,
          date: date.toDate(),
          past: date.isBefore(today),
          today: date.isSame(today, 'day'),
          future: date.isAfter(today),
          first: date.date() == 1,
          events: eventsByDay[date.format('YYYY-MM-DD')] // TODO temp
        };

        days.push(day);
        startDate.add(1, 'days');
      }

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
        let { date } = this.get();
        date.add(-1, 'months'); // TODO support week/day
        this.set({ date: date });
      },
      forward() {
        let { date } = this.get();
        date.add(1, 'months'); // TODO support week/day
        this.set({ date: date });
      },
      today() {
        let today = moment().startOf('day');
        this.set({ date: today });
      },
      select(e, date) {
        this.set({ date: date.day });
        return true;
      }
    });
  }
});
