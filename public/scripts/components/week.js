import Ractive from 'ractive';
import './day.js';

Ractive.components.Week = Ractive.extend({
  template: `<div class="fc-row">
               {{#each days}}
                 <Day events={{events}} />
               {{/each}}
             </div>`
})