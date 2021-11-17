objectDetector= "";
img = "";
statuss = "";

function preload(){
  img = loadImage('downloadt.png');
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
    text("Banana", 160, 110);
    noFill();
    stroke("#FF0000");
    rect(152.87327766418457, 96.13359719514847, 148.48783612251282, 243.83779615163803);
    fill("#FF0000");
    text("Bowl", 98, 295);
    noFill();
    stroke("#FF0000");
    rect(84.33346450328827, 281.4168632030487,  336.0946327447891, 195.9795355796814);

}