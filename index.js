var isVideo = true;

navigator.mediaDevices
  .getUserMedia({ video: true })
  .then(function(stream) {
    document.getElementById("camera").srcObject = stream;
  })
  .catch(function() {
    alert("Could not connect stream");
  });

function switchFunction() {
  var videoElement = document.getElementById("camera");
  
  if (isVideo) {
    videoElement.srcObject.getTracks().forEach(track => track.stop()); // Stop all video tracks
    isVideo = false;
    document.getElementById("switcher").innerHTML = "Camera On";
  } else {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(function(stream) {
        videoElement.srcObject = stream;
      })
      .catch(function() {
        alert("Could not connect stream");
      });
    isVideo = true; // Update camera state
    document.getElementById("switcher").innerHTML = "Camera Off";
  }
  console.log('I am here');
}
