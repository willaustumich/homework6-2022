var video;

//page load
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;

});

//play video
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

//pause video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

//slow video
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate *= 0.95;
	console.log("speed is ", video.playbackRate);
});

//speed up video
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate /= 0.95;
	console.log("speed is ", video.playbackRate);
});

//skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	video.currentTime += 15;
	if (video.currentTime >= video.duration){
		video.currentTime = 0;
	}
	console.log("Video current time is", video.currentTime);
});

//mute
document.querySelector("#mute").addEventListener("click", function() {
	//console.log(video.muted)
	if (video.muted == false){
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute"

	}else{
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute"
	}
});

//volume slidebar
// document.querySelector("#sidebar").addEventListener("click", function() {
// 	let mySlider = document.querySelector("#sidebar")
// 	console.log(mySlider.value);
// });

//vintage
document.querySelector("#vintage").addEventListener("click", function() {
	//let myElement = document.querySelector("#orig");
	video.className = "oldSchool";

});

//original
document.querySelector("#orig").addEventListener("click", function() {
	//let myElement = document.querySelector("#orig");
	video.className = "video";

});



