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
      var btn = this.view.parsedTouchbar.items[0]
      var canvas = new AtomTouchBarCanvas({
         width: 1450,
         height: 64,
         system: {
            particles: [],
            particle: function(){
               this.dead = false
               this.x = Math.floor(Math.random()*1450)
               this.y = Math.floor(Math.random()*64)
               this.size = 8
               this.xDirection = Math.random() > 0.5 ? 2 : -2
               this.yDirection = Math.random() > 0.5 ? 2 : -2

               this.move = function(){
                  this.x += this.xDirection
                  this.y += this.yDirection

                  if(this.x % 20 === 0 && this.y % 20 === 0)
                     this.changeDirection()

                  if(this.x < 0 || this.x > 1450 || this.y < 0 || this.y > 64)
                     this.dead = true
               }

               this.changeDirection = function(){
                  this.xDirection = Math.random() > 0.5 ? 2 : -2
                  this.yDirection = Math.random() > 0.5 ? 2 : -2
               }
            },
            generate: function(){
               if(Math.random() > 0.5)
                  this.createParticle()
            },
            createParticle: function(){
               this.particles.push(new this.particle())
            }
         },
         step: function(){
            this.setFillStyle('#FFF')
            var system = this.options.system
            var particles = system.particles

            system.generate()

            var liveParticles = []
            for(var particle of particles){
               if(particle.dead) continue
               liveParticles.push(particle)
               particle.move()

               var color = Math.floor(255 * (particle.y/this.canvas.height))
               this.setFillStyle(`rgba(${color}, ${Math.floor(color*0.25)}, 100, 0.75)`)
               this.fillCircle({
                  x: particle.x,
                  y: particle.y,
                  size: particle.size
               })
            }
            particles = liveParticles

            this.setFillStyle('rgba(255, 255, 255, 0.05)')
            this.fillRect({ x: 0, y: 0, width: this.canvas.width, height: this.canvas.width })
            btn.icon = this.toImage()
         }
      })
   }

}
