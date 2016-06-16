import Ractive from 'ractive';
import './month_header.js';
import './week.js';

Ractive.components.Month = Ractive.extend({
  template: `<div class="fc-calendar fc-five-rows">
               <MonthHeader />
               <div class="fc-body">
                 {{#each weeks}}
                   <Week days={{this}} />
                 {{/each}}
               </div>
            </div>`
});