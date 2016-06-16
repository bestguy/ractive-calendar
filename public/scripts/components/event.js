import Ractive from 'ractive';

Ractive.components.Event = Ractive.extend({
  template: `<div class="fc-calendar-events" on-click="event:{{event}}">
               <a class="fc-event" href="{{url}}" target="_blank">
                 {{#if type == 'birthday'}}
                   <i class="fa fa-fw fa-birthday-cake"></i>
                 {{elseif type == 'personal'}}
                   <i class="fa fa-fw fa-calendar-o"></i>
                 {{elseif type == 'work'}}
                   <i class="fa fa-fw fa-check"></i>
                 {{/if}}
                 {{event.title}}
               </a>
             </div>`
})
