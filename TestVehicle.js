const Vehicle = require('./Vehicle.js');

function main(){
    //make two vehicles and take them for a spin.
   let jackcar = new Vehicle(6,14,14,24,0);
   jackcar.drive(10);
   console.log(jackcar.totalMiles());



}
//run the main method
main();
