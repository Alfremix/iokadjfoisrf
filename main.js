img = "";
status = "";
objects = [];
function preload(){
    img = loadImage("")
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "status: detectando objetos";
}

function modelLoaded(){
    console.log("modelo cargado");
    status =  true;
    objectDetected.detect(img,gotResult);

}

function gotResult(error,results){
   if(error){
       console.log(error);
   }
   console.log(results);
   objects = results;
}

function draw(){
    image(img,0,0,640,420);
    if(status !=""){
        for (i = 0; i<objects.length; i++){
            document.getElementById("status").innerHTML = "status: objeto detectado";
            Fill("#ff0000");
            var percent = floor(objects[i].confidence * 100);
            text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
            noFill();
            stroke("ff0000");
            rect(objects[i].x,objects[i].y, objects[i].width,object[i].height);
        }
    }
    

}