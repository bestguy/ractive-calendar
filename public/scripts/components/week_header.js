import Ractive from 'ractive';

Ractive.components.WeekHeader = Ractive.extend({
  isolated: true,
  template: `<div class="fc-head">
               {{#each days}}
                 <div class="text-center">{{datetime(this.date, 'ddd D')}}</div>
               {{/each}}
             </div>`
});
