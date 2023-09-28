function preload() {
	// loadingAllSounds(); 
	muerte=loadSound("muerte.mp3") 
	salto=loadSound("Salto.mp3")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas=createCanvas(gameConfig.screenX,gameConfig.screenY);
	canvas.parent("juego_mario")
     video=createCapture(VIDEO)
	 video.parent("consola")
	 video.size(600,250)
	instializeInSetup(mario);
	// playBGMusic();

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
  
}

function draw() {
	game()
}
function modelLoaded() {
	console.log('¡Modelo cargado!');
  }
  
  function gotPoses(results)
  {
	if(results.length > 0)
	{
	  noseX = results[0].pose.nose.x;
	  noseY = results[0].pose.nose.y;
	  console.log("noseX = " + noseX +", noseY = " + noseY);
	}
  }
  





