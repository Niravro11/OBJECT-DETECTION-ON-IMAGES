objectDetector= "";
img = "";
statuss = "";

function preload(){
  img = loadImage('downloadtv.png');
}


function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
  console.log("Model Loaded!")
  statuss = true;
  objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
}


function draw () {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Tv", 180, 290);
    noFill();
    stroke("#FF0000");
    rect( 171.60944938659668, 273.80893528461456,   219.4941759109497, 175.15275478363037); 
}