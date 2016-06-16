import 'babel-polyfill';
import Ractive from 'ractive';
import fetch from 'isomorphic-fetch';
import 'ractive-animatecss';
import 'ractive-datetime';
import './helpers.js';
import './components/calendar.js';
import './components/event_filter.js';
import './components/overlay.js';

import './main.css';

let app = new Ractive({
  el: '#main',
  data() {
    return {
      events: [],
      visible: ['birthday', 'personal', 'work']
    }
  },
  computed: {
    visible_events() {
      let { events, visible } = this.get();
      return _.filter(events, event => _.includes(visible, event.type));
    }
  },
  template: `<div class="container">
               <aside class="col-md-2 col-sm-3">
                 <h3>Events</h3>
                 <EventFilter filter={{visible}} />
                 <hr />
               </aside>

               <div class="col-md-10 col-sm-9">
                 <Calendar events={{visible_events}} />
               </div>
             </div>`,
  oninit() {
    fetch('/calendar/events')
      .then(response => response.json())
      .then(events => this.set({ events }))
      .catch(err => console.error(err));
  }
});
