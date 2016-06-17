import Ractive from 'ractive';
import './day.js';

Ractive.components.Week = Ractive.extend({
  isolated: true,
  template: `<div class="fc-row">
               {{#each days}}
                 <Day date={{date}} events={{events}} />
               {{/each}}
             </div>`
})
