


class Timer{
  constructor() {
    this.count = 0;
  }

  start(){
  	 setInterval(function () {
  		this.count++
  	}.bind(this), 1000)
  }

  getTime(){
  	return (this.count)
  }

  clear(){
  	clearInterval();
  	this.count=0
  }
}

export default Timer


