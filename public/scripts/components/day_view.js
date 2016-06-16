import Ractive from 'ractive';
import './month_header.js';
import './week.js';
import './week_day.js';
import './week_header.js';

Ractive.components.DayView = Ractive.extend({
  template: `<div class="fc-calendar fc-one-row">
               <div class="fc-head text-left">
                 {{datetime(date, 'dddd')}}
               </div>
               <div class="fc-body">
                 <div class="fc-row">
                   {{#each days}}
                     {{#each events}}
                       <div intro="animate:fadeIn">
                         <Event type={{type}} event="{{this}}" />
                       </div>
                     {{/each}}
                   {{/each}}
                 </div>
               </div>
            </div>`
});
