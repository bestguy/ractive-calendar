import Ractive from 'ractive';
import './day_label.js';
import './event.js';

Ractive.components.Day = Ractive.extend({
  template: `<div class="{{datetime(date, 'MMM ddd')}}
                         {{#today}}today{{/today}}
                         {{#if !same_month}}other_month{{/if}}">
              <DayLabel date={{date}} />
              {{#each events}}
                <div intro="animate:fadeIn">
                  <Event type={{type}} event="{{this}}" />
                </div>
              {{/each}}
            </div>`
})
