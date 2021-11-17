objectDetector= "";
img = "";
statuss = "";

function preload(){
  img = loadImage('download.png');
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
    text("Bed", 100, 110);
    noFill();
    stroke("#FF0000");
    rect(88.87170001864433, 95.70676684379578,  391.79198145866394, 266.60182908177376);

}