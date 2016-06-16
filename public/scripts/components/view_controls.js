import Ractive from 'ractive';

Ractive.components.ViewControls = Ractive.extend({
  template: `<div class="btn-group btn-group-sm {{class}}">
               <button class="btn btn-default {{#if view == 'DAY'}}active{{/if}}" on-click="view:DAY">
                 Day
               </button>
               <button class="btn btn-default {{#if view == 'WEEK'}}active{{/if}}" on-click="view:WEEK">
                 Week
               </button>
               <button class="btn btn-default {{#if view == 'MONTH'}}active{{/if}}" on-click="view:MONTH">
                 Month
               </button>
             </div>`
});
