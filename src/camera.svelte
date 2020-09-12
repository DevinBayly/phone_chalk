<script>
  let video;
  import { onMount } from "svelte";
  onMount(() => {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({
          video: 
          {
            facingMode: {
              exact: "environment"
            }
          }
        })
        .then(function(stream) {
          video.srcObject = stream;
          const track = stream.getVideoTracks()[0];
          //Create image capture object and get camera capabilities
          const imageCapture = new ImageCapture(track);
          const photoCapabilities = imageCapture
            .getPhotoCapabilities()
            .then(() => {
              //todo: check if camera has a torch
              let btn = document.querySelector("#flashlight");
              btn.style.position = "absolute";
              btn.style["z-index"] = 200;
              btn.addEventListener("click", () => {
                //let there be light!
                track.applyConstraints({
                  advanced: [{ torch: true }]
                });
              });
            });
        })
        .catch(function(err0r) {
          console.log("Something went wrong!", err0r);
        });
    }
  });
</script>

<style>
video{
    position:absolute;
    z-index:5;
}</style>
<video bind:this={video} autoplay playsinline />
