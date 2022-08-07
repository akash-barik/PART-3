song="";
leftnosex="";
leftnosey="";
rightnosex="";
rightnosey="";
function preload(){
    song1=loadSound("Srivalli(Malyalam).mp3");
    song2=loadSound("Alan-Walker-Faded.mp3");
}

 function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes);

 }
 
 function modelloaded(){
    console.log("modal is loaded");
 }

 function gotposes(results){
	if(posenet.length>0){
		console.log(results);
      leftnosex=results[0].pose.nose.x;
	  leftnosey=results[0].pose.nose.y;
	  console.log("leftnosex= "+ noseX + ",leftnosey= " +  noseY);
    }
	}

function draw(){
    image(video,0,0,600,500);
}



