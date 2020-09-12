<script>
  let video;
  import Canvas from "./canvas.svelte";
  import { onMount } from "svelte";
  onMount(() => {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({
          video: {
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
              let vbox = video.getBoundingClientRect();
              let c = new Canvas({
                target: document.body,
                props: {
                  ch: vbox.height,
                  cw: vbox.width
                }
              });
              //todo: check if camera has a torch
              setTimeout(() => {
                let btn = document.querySelector("#flashlight");
                btn.addEventListener("click", () => {
                  //let there be light!
                  track.applyConstraints({
                    advanced: [{ torch: true }]
                  });
                });
              }, 1000);
            });
        })
        .catch(function(err0r) {
          console.log("Something went wrong!", err0r);
        });
    }
  });
</script>

<style>
  video {
    position: relative;
    width:100%;
    z-index: 5;
  }
</style>

<video bind:this={video} autoplay playsinline />
