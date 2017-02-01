class GuessingGame {
    constructor() {}

    setRange(min, max) {
    	this.min=min;
    	this.max=max;

    }
 
    lower(){
    	this.max=this.result;
    }

    greater(){
    	this.min=this.result;
    }
    guess() {
    	this.result=0;
    	if((this.min-this.max)%2==0){
          this.result=(this.min+(this.max-this.min)/2);
         }
        else {this.result=(this.min+(this.max-this.min+1)/2);}
      	return this.result;
    }

}

module.exports = GuessingGame;
