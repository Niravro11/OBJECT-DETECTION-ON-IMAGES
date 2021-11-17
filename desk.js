objectDetector= "";
img = "";
statuss = "";

function preload(){
  img = loadImage('downloadl.png');
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
    text("Mobile", 180, 20);
    noFill();
    stroke("#FF0000");
    rect(173.42283725738525, 6.167078018188477,507.00064301490784, 426.5220522880554  );
}