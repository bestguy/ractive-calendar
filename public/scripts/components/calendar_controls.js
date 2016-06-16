import Ractive from 'ractive';

Ractive.components.CalendarControls = Ractive.extend({
  template: `<div class="btn-group {{class}}">
               <button class="btn btn-default" on-click="back">
                 <i class="fa fa-angle-up"></i>
               </button>
               <button class="btn btn-default" on-click="today">
                 Today
               </button>
               <button class="btn btn-default" on-click="forward">
                 <i class="fa fa-angle-down"></i>
               </button>
             </div>`
});