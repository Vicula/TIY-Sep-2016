// Constructor Function 101
var Robot = function(rName, rAge, rModel){
   this.name = rName;
   this.age = rAge;
   this.model = rModel
}

var printDateWithEnthusiasm = function(date){
   console.log(date, " !!!")
}

var robot1     = new Robot("Robert", 8, "Parex")
var otherBot   = new Robot("Coco", 20, "Concentrate")
var myFavorite = new Robot("Rufus Alexander", 1, "NeutralPH")

console.log(robot1)
console.log("------")
console.log(myFavorite)

printDateWithEnthusiasm("10-04-2016")
