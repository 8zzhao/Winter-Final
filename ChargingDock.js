//defines how all charging stations work.
function ChargingDock(){

//Instance variables
    this.ports=[undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined]; //finish from instructions
    this.leds=["red","red","red","red","red","red","red","red"]; //finish from instructions


//Instance Fucntions
    this.plug = function(dvc){
        for(l=0; l<=this.leds.length; l++){
            if (this.leds[l] == "red"){
                this.ports[l] = dvc;
            }
            if(dvc.juice < 0.99){
                this.leds = "yellow";
            }
            else if(dvc.juice >= 0.99){
                this.leds = "green";
            }
        }

        //type in here
    };

    this.unplug = function(dvcIdx){
            if (this.leds[dvcIdx] == "yellow" || "green"){
                let temp = this.ports[dvcIdx];
                this.ports[dvcIdx] = undefined;
                this.leds[dvcIdx] = "red";
                return temp;
            }
        //type in here
    };

    this.chargeAll = function(min){
            for(l=0; l<=this.leds.length; l++){
                if(!(this.leds[l] == "red")){
                    this.
                }
            }//type in here
    };


}

//defines the testing code
function main(){}

//runs the main code
main();
