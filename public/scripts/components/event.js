import Ractive from 'ractive';

Ractive.components.Event = Ractive.extend({
  template: `<div class="fc-calendar-events" on-click="event:{{event}}">
               {{#if type == 'birthday'}}
                 <a class="fc-event label label-success">
                   <i class="fa fa-fw fa-birthday-cake"></i>
                   {{event.title}}
                 </a>
               {{elseif type == 'personal'}}
                 <a class="fc-event label label-info">
                   <i class="fa fa-fw fa-calendar-o"></i>
                   {{event.title}}
                 </a>
               {{elseif type == 'work'}}
                 <a class="fc-event label label-warning">
                   <i class="fa fa-fw fa-check"></i>
                   {{event.title}}
                 </a>
               {{/if}}
             </div>`
})