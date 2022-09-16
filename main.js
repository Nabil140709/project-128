music_1 = "";
music_2 = "";

leftWrist = 0;
RightWrist = 0;

function preload(){
    music_1 = loadSound("music2.mp3");
    music_2 = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function modelLoaded() {
    console.log('PoseNet is initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWrist = results[0].pose.leftWrist.x;
        console.log("leftWrist = " + leftWrist);

        rightWrist = results[0].pose.rightWrist.x;
        console.log("rightWrist = " + rightWrist);
    }
}