let Vehicle = function(e,f,gt,avg,md){
    let engine = e;
    let fuel = f;
    let gastank = gt;
    let averageMPG = avg;
    let milesDriven = md;

    function totalMiles(){
        return milesDriven;
    }

    function fuelLeft(){
        return fuel;
    }

    function fill(percent){
        fuel += percent;
        if(fuel >= 1){
            fuel = 1;
        }
    }
    function drive(hours){

        let fuelburned = (engineEfficiency()*hours)
        if(fuelburned <= fuel){
            milesDriven += (hours*averageMPG);
            fuel -= (engineEfficiency()*hours);
        }
        else{
            milesDriven = fuel*averageMPG;
            fuel = 0;

        }
    }

    function engineEfficiency(){
        if(engine == 4){
            return 1;
        }
        else if(engine == 6){
            return 1.20;
        }
        else if(engine == 8){
            return 1.36;
        }
        else{
            return null;
            console.log("That is not an engine option");
        }

    }
    return{engineEfficiency,drive,fill,totalMiles,}
}
module.exports = Vehicle;
