import Ractive from 'ractive';
import './month_header.js';
import './week.js';
import './week_day.js';
import './week_header.js';

Ractive.components.WeekView = Ractive.extend({
  isolated: true,
  template: `<div class="fc-calendar fc-week-view fc-one-row">
               <WeekHeader days={{days}} />
               <div class="fc-body">
                 <div class="fc-row">
                   {{#each days}}
                     <WeekDay events={{events}} />
                   {{/each}}
                 </div>
               </div>
            </div>`
});
