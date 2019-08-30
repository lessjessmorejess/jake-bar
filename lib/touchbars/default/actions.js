'use babel';
import AtomTouchBarCanvas from '../../atom-touchbar-canvas'

export default class AtomTouchBarLoadedActions {
   constructor(view){
      this.view = view
   }
   // Go to touchbar actions
   goHome() {
      this.view.changeTouchBar('home')
   }

   // Homebar actions
   escapeKey(){
      var key;
      key = atom.keymaps.constructor.buildKeydownEvent('escape', {target: document.activeElement});
      return atom.keymaps.handleKeyboardEvent(key);
   }
   //Draw Jake
   goJake(){
      this.view.changeTouchBar('jake')
      var selectJake = 1;//Math.floor(Math.random()*3);
      var yellow_start = -100;
      var yellow_head = 0;
      var yellow_end = (1450-yellow_start+arm_length);
      var black_start = -300;
      var black_following = 0;
      var black_end = yellow_end;
      var arm_length = 16;
      var foot_length = 8;
      var head_size = 32;
      var butt_size = 32;
      var slow_grow_speed = 7;
      var fast_grow_speed = 12;
      var yellow_current_speed = fast_grow_speed;
      var black_current_speed = slow_grow_speed;
      var btn = this.view.parsedTouchbar.items[0]
      var canvas = new AtomTouchBarCanvas({
         width: 1450,
         height: 64,
         step: function(){
           //Stretchy Jake
            if (selectJake == 1){

              if (yellow_head < black_following){
                this.setFillStyle('rgba(0, 0, 0, 1)');
                this.fillRect({
                  x: black_start,
                  y: 0,
                  width: black_following,
                  height: this.canvas.height })
              }
              this.setFillStyle('rgba(251, 201, 43, 1)');
              this.fillRect({
                x: yellow_start,
                y: 0,
                width: yellow_head,
                height: this.canvas.height })
              if (yellow_head > black_following){
                this.setFillStyle('rgba(0, 0, 0, 1)');
                this.fillRect({
                  x: black_start,
                  y: 0,
                  width: black_following,
                  height: this.canvas.height })
              }
              if (yellow_head >= this.canvas.width-yellow_start+100){
                yellow_head = 0;
                yellow_current_speed = 0;
                black_current_speed = fast_grow_speed;
              }
              if (black_following >= this.canvas.width-black_start+100){
                black_following = 0;
                yellow_current_speed = fast_grow_speed;
                black_current_speed = slow_grow_speed;
              }
               yellow_head += yellow_current_speed;
               black_following += black_current_speed;
            }
            //Beeg Jake
            if (selectJake ==2){
              this.setFillStyle('rgba(100, 100, 100, 1)');
              this.fillRect({ x: 0, y: 0, width: this.canvas.width, height: this.canvas.width })
            }
            //????
            if (selectJake == 0){
              this.setFillStyle('rgba(255, 255, 255, 1)');
              this.fillRect({ x: 0, y: 0, width: this.canvas.width, height: this.canvas.width })
            }
            btn.icon = this.toImage()
         }
      })
   }

}
