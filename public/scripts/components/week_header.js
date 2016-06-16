import Ractive from 'ractive';

Ractive.components.WeekHeader = Ractive.extend({
  template: `<div class="fc-head">
               {{#each days}}
                 <div class="text-center">{{datetime(this.date, 'ddd D')}}</div>
               {{/each}}
             </div>`
});
