class state {
    constructor (startTimestamp, difference, suspended) {
        this.startTimestamp = startTimestamp;
        this.difference = difference;
        this.suspended = suspended
    }
     
    static ready() {
        return new state(null, 0, 0);
    }
}
 
class stopwatch {
    constructor(state) {
     this.state = state;
     this.requestAnimationId = null;
     this.handleclickstart = this.handleclickstart.bind(this);
     document.getElementById("start").addEventListener("click", this.handleclickstart);
     document.getElementById("stop").addEventListener("click", this.handleclickstart);
     document.getElementById("Reset").addEventListener("click", this.handleclickstart);
     this.tick = this.tick.bimd(this);
     this.render();
    }
     static ready(){
         return new stopwatch(state.ready());
     }

     setstate(newstate) {
         this.state = { ...this.state, ...newstate };
         this.render();
     }

     tick () {
         this.setstate({
             difference:new date (new Date() - this.state.startTimestamp)
         })
         this.requestAnimationId = requestAnimationFrame(this.tick);
     }

     handleclickstart() {
         if (this.state.startTimestamp) {
             // prevent multi clicks on start
             return;
             
         }
         this.setstate({
             startTimestamp: new Date() - this.state.suspended,
             suspended: 0
         })
         this.requestAnimationId = requestAnimationFrame(this.tick);
          }
        handleClickstop() {
            cancelAnimationFrame(this.requestAnimationId);
            this.setstate({
                startTimestamp: null,
                suspended: this.state.difference
            });
        }
         
        handleClickReset() {
            cancelAnimationFrame(this.requestAnimationId)
            this.setstate(state.ready());
        }

        render() {
            const {difference} = this.state;
            const hundredthsb = (difference ? Math.floor(difference.getmilliseconds()/ 10) : 0).toString().padStart(2, "0");
            const seconds = (difference ? Math.floor(difference.getseconds()) : 0).toString().padStart(2, "0");
            const minutes = (difference ? Math.floor(difference.getminutes()) : 0).toString().padStart(2, "0");
        
            // Render screen
            document.getElementById("minutes").textContent = minutes;
            document.getElementById("seconds").textContent = seconds;
            document.getElementById("hundredths").textContent = hundredths;
        }
}

const STOPWATCH = Stopwatch.ready();