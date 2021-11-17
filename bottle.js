objectDetector= "";
img = "";
statuss = "";

function preload(){
  img = loadImage('downloadb.png');
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
    text("Bottle", 250, 170);
    noFill();
    stroke("#FF0000");
    rect( 73.96908178925514, 153.47351264953613,  124.37123581767082, 378.52543020248413);


    fill("#FF0000");
    text("Bottle", 90, 170);
    noFill();
    stroke("#FF0000");
    rect( 534.4568610191345, 209.22737455368042,  139.95766639709473, 313.65658378601074);


    fill("#FF0000");
    text("Bottle", 410, 150);
    noFill();
    stroke("#FF0000");
    
    rect( 234.89702939987183, 149.1547441482544,  114.9570107460022, 376.23794507980347);


    fill("#FF0000");
    text("Bottle", 540, 230);
    noFill();
    stroke("#FF0000");
    rect( 685.6275022029877, 167.6466165781021,  159.81223583221436, 364.13690650463104);


    fill("#FF0000");
    text("Bottle", 100000, 110);
    noFill();
    stroke("#FF0000");
    rect(  404.2017638683319, 127.34729361534119,  101.96599960327148,  407.81733226776123);
}