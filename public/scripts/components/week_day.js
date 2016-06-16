import Ractive from 'ractive';
import './day_label.js';
import './event.js';

Ractive.components.WeekDay = Ractive.extend({
  template: `<div class="{{datetime(date, 'MMM ddd')}}
                         fc-{{#past}}past{{/past}}{{#today}}today{{/today}}{{#future}}future{{/future}}
                         {{#if !selected.isSame(date, 'month')}}other_month{{/if}}">
              <span class="fc-weekday">{{datetime(date, 'ddd D')}}</span>
              {{#each events}}
                <div intro="animate:fadeIn">
                  <Event type={{type}} event="{{this}}" />
                </div>
              {{/each}}
            </div>`
})
