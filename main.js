var status="";
var img="";
function preload(){
img=loadImage("iphone.jpg");
}

function setup(){
canvas=createCanvas(400,400);
canvas.center();
objectDetector=ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML="status : Identifying Objects";
}

function modelLoaded(){
console.log("Model loaded!!")    
status=true;
objectDetector.detect(img,gotResults);
}

function gotResults(error,results){
if(error){
console.log(error);    
}
else{
console.log(results);
}   
}

function draw(){
image(img,0,0,400,400);
fill("black");
text("iphone",45,75);
noFill();
stroke("#f5b042");
rect(30,60,280,250);
}