import Ractive from 'ractive';

Ractive.components.DayLabel = Ractive.extend({
  template: `<span class="fc-date">
               {{#if first}}{{datetime(date, 'MMM')}}{{/if}}
               {{datetime(date, 'D')}}
             </span>
            <span class="fc-weekday">{{datetime(date, 'ddd')}}</span>`
});