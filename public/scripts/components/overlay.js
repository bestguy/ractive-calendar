import Ractive from 'ractive';

Ractive.components.Overlay = Ractive.extend({
  data() {
    return {
      open: true
    }
  },
  template: `{{#open}}
               <div class="overlay" intro="animate:fadeIn" outro="animate:fadeOut">
                 <div class="text-right">
                   <i class="fa fa-times fa-2x" on-click="close">X</i>
                 </div>
                 {{yield}}
               </div>
             {{/open}}`,
  oninit() {
//    this.on({
//      close: () => this.set({ open: false })
//    });
  }
});