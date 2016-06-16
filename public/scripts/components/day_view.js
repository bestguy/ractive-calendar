import Ractive from 'ractive';
import './month_header.js';
import './week.js';
import './week_day.js';
import './week_header.js';

Ractive.components.DayView = Ractive.extend({
  template: `<div class="fc-calendar fc-day-view fc-one-row">
               <div class="fc-head text-left">
                 {{datetime(date, 'dddd')}}
               </div>
               <hr />
               <div>
                 {{#each days}}
                   <h3 class="text-muted">
                     {{#if events.length}}{{events.length}}{{else}}No{{/if}}
                     Events
                   </h3>
                   {{#each events}}
                     <div class="panel panel-info" intro="animate:fadeIn">
                       <b class="text-info text-capitalize">
                         <i class="fa fa-fw {{#if type == 'birthday'}}fa-birthday-cake
                                            {{elseif type == 'personal'}}fa-calendar-o
                                            {{elseif type == 'work'}}fa-check{{/if}}"></i>
                         {{type}}
                       </b>
                       <h3>
                         {{title}}
                       </h3>
                       <a href="{{url}}" target="_blank">
                         <h4>{{url}}</h4>
                       </a>
                     </div>
                   {{/each}}
                 {{/each}}
               </div>
            </div>`
});
