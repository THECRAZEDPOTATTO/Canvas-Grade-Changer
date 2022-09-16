var texts = document.getElementsByClassName('percent');
let A = "100%"
let B = "80%"
let C = "70%"
let D = "65%"
let F = "30%"
var grade = A //set grade
console.log("Setting Grade: "+ grade)
for(var i=0;i < texts.length; i++){
document.getElementsByClassName('percent')[i].innerHTML = grade;//Client Side Change
}
