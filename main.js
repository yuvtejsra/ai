lwx=0;
lwy=0;
rwx=0;
rwy=0;
function setup(){
    canvas=createCanvas(600,500);
    canvas.position(550,250);
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
   posenet.on('pose',gotPoses);

}  
function gotposes(results){
    if(results.length>0){
        console.log(results);
        lwx=results[0].pose.leftWrist.x;
        lwy=results[0].pose.leftWrist.y;
        rwx=results[0].pose.rightWrist.x;
        rwy=results[0].pose.rightWrist.y;
          

    }

} 
function modelLoaded(){
    console.log("obama");
}
function draw(){
    image(video,0,0,600,500);
    
}
song1="";
function preload(){
    song1=loadSound("music.mp3");
    song2=loadsound("baller.mp3");
    
}
function bur(){
    song.play();
}
