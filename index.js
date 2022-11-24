var texts = document.getElementsByClassName('percent');
const rA = [90,100];
const rB = [80,89];
const rC = [70,79];
const rD = [60,69];
const rF = [30,59];
var grade = rA //set grade
const realistic_Grades = true;
if (realistic_Grades) {
  const highest = Math.max(...grade);
  const lowest = Math.min(...grade);
  const random = Math.floor(Math.random() * (highest - lowest + 1)) + lowest;
  for(var i=0;i < texts.length; i++){
    document.getElementsByClassName('percent')[i++].innerHTML = random+"%";
  }
} 
else{
  console.log("Setting Grade: "+ grade)
  for(var i=0;i < texts.length; i++){
  document.getElementsByClassName('percent')[i].innerHTML = grade;}//Client Side Change
}

