function preload() {
    song = loadSound("music.mp3")
}
function setup() {
    canvas = createCanvas(500, 500)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded)
}
function modelLoaded() {
    console.log("poseNet is Initialized")
}
function draw() {
    image(video, 0, 0, 500, 500)
}
function play() {
    song.play()
    song.setVolume(1)
    song.rate(1)
}