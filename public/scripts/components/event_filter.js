import Ractive from 'ractive';

Ractive.components.EventFilter = Ractive.extend({
  isolated: true,
  template: `<div>
               <div class="checkbox">
                 <label>
                   <input type="checkbox" name="{{filter}}" value="birthday" />
                   Birthday
                 </label>
               </div>
               <div class="checkbox">
                 <label>
                   <input type="checkbox" name="{{filter}}" value="personal" />
                   Personal
                 </label>
               </div>
               <div class="checkbox">
                 <label>
                   <input type="checkbox" name="{{filter}}" value="work" />
                   Work
                 </label>
               </div>
             </div>`
});
