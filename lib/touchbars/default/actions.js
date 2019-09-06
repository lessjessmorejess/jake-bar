'use babel';
import AtomTouchBarCanvas from '../../atom-touchbar-canvas'

export default class AtomTouchBarLoadedActions {
  constructor(view) {
    this.view = view
  }
  // Go to touchbar actions
  goHome() {
    this.view.changeTouchBar('home')
  }

  // Homebar actions
  escapeKey() {
    var key;
    key = atom.keymaps.constructor.buildKeydownEvent('escape', {
      target: document.activeElement
    });
    return atom.keymaps.handleKeyboardEvent(key);
  }
  //Draw Jake
  goJake() {
    this.view.changeTouchBar('jake')
    //vars for stretchy jake
    var selectJake = 2; //Math.floor(Math.random()*3);
    var yellow_start = -100;
    var yellow_head = 0;
    var yellow_end = (1450 - yellow_start + arm_length);
    var black_start = -300;
    var black_following = 0;
    var black_end = yellow_end;
    var arm_length = 54;
    var foot_length = 50;
    var head_size = 34;
    var butt_size = 34;
    var slow_grow_speed = 7;
    var fast_grow_speed = 12;
    var yellow_current_speed = fast_grow_speed;
    var black_current_speed = slow_grow_speed;

    //vars for beeg jakebar
    var beeg_grow_speed = 3;
    var current_beeg_black = 0;
    var eye_y = 128;
    var eye_movespeed = 2;
    var btn = this.view.parsedTouchbar.items[0]
    var canvas = new AtomTouchBarCanvas({
      width: 1450,
      height: 64,
      step: function() {
        //Stretchy Jake
        if (selectJake == 1) {

          if (yellow_head < black_following) {
            this.setFillStyle('rgba(0, 0, 0, 1)');
            this.fillRect({
              x: black_start,
              y: 0,
              width: black_following,
              height: this.canvas.height
            })
          }
          this.setFillStyle('rgba(251, 201, 43, 1)');
          this.fillRect({
            x: yellow_start,
            y: 0,
            width: yellow_head,
            height: this.canvas.height
          })
          if (yellow_head > black_following) {
            this.setFillStyle('rgba(0, 0, 0, 1)');
            this.fillRect({
              x: black_start,
              y: 0,
              width: black_following,
              height: this.canvas.height
            })
          }
          //Head
          this.setFillStyle('rgba(251, 201, 43, 1)')
          this.fillCircle({
            x: yellow_head + yellow_start,
            y: this.canvas.height / 2,
            size: head_size
          });
          //eyes
          this.setFillStyle('rgba(0, 0, 0, 1)')
          this.fillCircle({
            x: yellow_head + yellow_start-4,
            y: this.canvas.height / 2-10,
            size: 10
          });
          this.fillCircle({
            x: yellow_head + yellow_start + 20,
            y: this.canvas.height / 2-10,
            size: 10
          });
          this.setFillStyle('rgba(255, 255, 255, 1)')
          this.fillCircle({
            x: yellow_head + yellow_start-3,
            y: this.canvas.height / 2-11,
            size: 8
          });
          this.fillCircle({
            x: yellow_head + yellow_start + 21,
            y: this.canvas.height / 2-11,
            size: 8
          });
          //Jowel
          this.setFillStyle('rgba(0, 0, 0, 1)')
          this.fillCircle({
            x: yellow_head + yellow_start + 8,
            y: this.canvas.height / 2 + 8,
            size: 15
          });
          this.setFillStyle('rgba(251, 201, 43, 1)')
          this.fillCircle({
            x: yellow_head + yellow_start + 8,
            y: this.canvas.height / 2 + 8,
            size: 14
          });
          this.fillCircle({
            x: yellow_head + yellow_start + 8,
            y: this.canvas.height / 2 + 10,
            size: 14
          });
          //Side jowels
          this.setFillStyle('rgba(0, 0, 0, 1)')
          this.fillCircle({
            x: yellow_head + yellow_start + 18,
            y: this.canvas.height / 2 + 12,
            size: 5
          });
          this.fillCircle({
            x: yellow_head + yellow_start - 2,
            y: this.canvas.height / 2 + 12,
            size: 5
          });
          this.setFillStyle('rgba(251, 201, 43, 1)')
          this.fillCircle({
            x: yellow_head + yellow_start + 18,
            y: this.canvas.height / 2 + 12,
            size: 4
          });
          this.fillCircle({
            x: yellow_head + yellow_start - 2,
            y: this.canvas.height / 2 + 12,
            size: 4
          });
          this.fillCircle({
            x: yellow_head + yellow_start + 18,
            y: this.canvas.height / 2 + 10,
            size: 4
          });
          this.fillCircle({
            x: yellow_head + yellow_start - 2,
            y: this.canvas.height / 2 + 10,
            size: 4
          });
          this.setFillStyle('rgba(0, 0, 0, 1)')
          this.fillCircle({
            x: yellow_head + yellow_start + 8,
            y: this.canvas.height / 2 + 8,
            size: 5
          });
          this.setFillStyle('rgba(251, 201, 43, 1)')
          this.fillCircle({
            x: yellow_head + yellow_start + 8,
            y: this.canvas.height / 2 + 8,
            size: 4
          });
          this.fillCircle({
            x: yellow_head + yellow_start + 8,
            y: this.canvas.height / 2 + 10,
            size: 4
          });
          //nose
          this.setFillStyle('rgba(0, 0, 0, 1)')
          this.fillCircle({
            x: yellow_head + yellow_start + 8,
            y: this.canvas.height / 2 + 7,
            size: 6
          });

          //Tail
          this.setFillStyle('rgba(251, 201, 43, 1)')
          this.fillCircle({
            x: black_following + black_start - 35,
            y: this.canvas.height / 2 - 16,
            size: 16
          });
          //Tail Cover
          this.setFillStyle('rgba(0, 0, 0, 1)')
          this.fillCircle({
            x: black_following + black_start - 33,
            y: this.canvas.height / 2 - 24,
            size: 13
          });
          //Butt
          this.setFillStyle('rgba(251, 201, 43, 1)')
          this.fillCircle({
            x: black_following + black_start,
            y: this.canvas.height / 2,
            size: head_size
          });

          //Legs
          this.setFillStyle('rgba(251, 201, 43, 1)');
          this.fillRect({
            x: black_following + black_start - (foot_length * 1.4),
            y: this.canvas.height / 2 + 4,
            width: foot_length,
            height: 8
          })
          this.setFillStyle('rgba(251, 201, 43, 1)');
          this.fillRect({
            x: black_following + black_start - (foot_length * 1.4),
            y: this.canvas.height / 2 + 18,
            width: foot_length,
            height: 8
          })
          //Arms
          this.setFillStyle('rgba(251, 201, 43, 1)');
          this.fillRect({
            x: yellow_head + yellow_start + (arm_length * .6),
            y: this.canvas.height / 2 + 4,
            width: arm_length,
            height: 8
          })
          this.setFillStyle('rgba(251, 201, 43, 1)');
          this.fillRect({
            x: yellow_head + yellow_start + (arm_length * .6),
            y: this.canvas.height / 2 + 18,
            width: arm_length,
            height: 8
          })
          if (yellow_head >= this.canvas.width - yellow_start + 100) {
            yellow_head = 0;
            yellow_current_speed = 0;
            black_current_speed = fast_grow_speed;
          }
          if (black_following >= this.canvas.width - black_start + 100) {
            black_following = 0;
            yellow_current_speed = fast_grow_speed;
            black_current_speed = slow_grow_speed;
          }
          yellow_head += yellow_current_speed;
          black_following += black_current_speed;
        }
        //Beeg Jake
        if (selectJake == 2) {
          this.setFillStyle('rgba(0, 0, 0, 1)');
          this.fillRect({
            x: 0,
            y: 0,
            width: this.canvas.width,
            height: this.canvas.height
          })
          this.setFillStyle('rgba(251, 201, 43, 1)')
          this.fillCircle({
            x: this.canvas.width*.5,
            y: this.canvas.width*4 + (this.canvas.height*2)-current_beeg_black,
            size: this.canvas.width*4
          });

            this.setFillStyle('rgba(0, 0, 0, 1)')
            this.fillCircle({
              x: this.canvas.width*(1/4),
              y: this.canvas.height*2.25 +eye_y,
              size: 105
            });
            this.fillCircle({
              x: this.canvas.width*(3/4),
              y: this.canvas.height*2.25 +eye_y,
              size: 105
            });
            this.setFillStyle('rgba(255, 255, 255, 1)')
            this.fillCircle({
              x: this.canvas.width*(1/4)+2,
              y: this.canvas.height*2.3-1 +eye_y,
              size: 100
            });
            this.fillCircle({
              x: this.canvas.width*(3/4)+2,
              y: this.canvas.height*2.3-1 +eye_y,
              size: 100
            });
            eye_y -= eye_movespeed;


            current_beeg_black += beeg_grow_speed;

        }
        //????
        if (selectJake == 0) {
          this.setFillStyle('rgba(255, 255, 255, 1)');
          this.fillRect({
            x: 0,
            y: 0,
            width: this.canvas.width,
            height: this.canvas.width
          })
        }
        btn.icon = this.toImage()
      }
    })
  }

}
