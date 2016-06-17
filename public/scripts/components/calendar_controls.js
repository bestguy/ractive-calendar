import Ractive from 'ractive';

Ractive.components.CalendarControls = Ractive.extend({
  isolated: true,
  template: `<div class="btn-group btn-group-sm {{class}}">
               <button class="btn btn-default" on-click="back">
                 <i class="fa fa-angle-left"></i>
               </button>
               <button class="btn btn-default" on-click="today">
                 Today
               </button>
               <button class="btn btn-default" on-click="forward">
                 <i class="fa fa-angle-right"></i>
               </button>
             </div>`
});
