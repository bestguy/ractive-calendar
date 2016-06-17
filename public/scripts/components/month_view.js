import Ractive from 'ractive';
import './month_header.js';
import './week.js';

Ractive.components.MonthView = Ractive.extend({
  isolated: true,
  template: `<div class="fc-calendar fc-month-view fc-five-rows">
               <MonthHeader />
               <div class="fc-body">
                 {{#each weeks}}
                   <Week days={{this}} />
                 {{/each}}
               </div>
            </div>`
});
