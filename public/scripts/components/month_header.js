import Ractive from 'ractive';

Ractive.components.MonthHeader = Ractive.extend({
  template: `<div class="fc-head">
               {{#each [0,1,2,3,4,5,6]}}
                 <div>{{datetime(weekday(this), 'ddd')}}</div>
               {{/each}}
             </div>`
});