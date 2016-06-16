import Ractive from 'ractive';

Ractive.components.ViewControls = Ractive.extend({
  template: `<div class="btn-group btn-group-sm {{class}}">
               <button class="btn btn-default {{#if view == 'DAY'}}active{{/if}}" on-click="view:DAY">
                 <span class="hidden-xs">Day</span>
                 <span class="visible-xs">1</span>
               </button>
               <button class="btn btn-default {{#if view == 'WEEK'}}active{{/if}}" on-click="view:WEEK">
                 <span class="hidden-xs">Week</span>
                 <span class="visible-xs">7</span>
               </button>
               <button class="btn btn-default {{#if view == 'MONTH'}}active{{/if}}" on-click="view:MONTH">
                 <span class="hidden-xs">Month</span>
                 <span class="visible-xs">30</span>
               </button>
             </div>`
});
