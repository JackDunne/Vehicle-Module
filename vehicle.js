let vehicle = function(e,f,gt,avg,md){
      let engine = e;
      let fuel = f;
      let gastank = gt;
      let averageMPG = avg;
      let milesDriven = md;
}

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
      milesDriven += (hours*averageMPG);
      fuel -= (engineEfficiency()*hours);
      
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
