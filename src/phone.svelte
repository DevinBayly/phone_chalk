<script>
import {onMount} from "svelte"
onMount(()=> {
  var video = document.createElement("video");
  var scalefactor;
  video.setAttribute("autoplay", "true");
  video.setAttribute("playsinline", "true");
  document.querySelector("#holder").append(video);
  var GA = 0.8;
  var lastDeets;

  function handleFiles(e) {
    var URL = window.webkitURL || window.URL;
    var max_width = 400;
    var max_height = 300;

    var can = document.createElement("canvas");
    can.id = "c3";

    document.querySelector("#holder").append(can);
    var ctx = can.getContext("2d");
    var url = URL.createObjectURL(e.target.files[0]);
    var img = new Image();
    var img2 = new Image();
    let once = true;
    img.onload = function() {
      if (once) {
        var ratio = 1;
        let videoDims = video.getBoundingClientRect();
        can.style.top = `${videoDims.y}px`;
        can.style.left = `${videoDims.x}px`;
        can.width = img.width;
        can.height = img.height;
        ctx.scale(ratio, ratio);
        ctx.globalAlpha = GA;
        ctx.drawImage(
          img,
          0,
          0,
          can.width,
          (can.width / videoDims.width) * videoDims.height,
          0,
          0,
          videoDims.width,
          videoDims.height
        );
        makeGridSlider(videoDims.width, videoDims.height, can, ctx, img, img2);
        lastDeets = {
          sx: 0,
          sy: 0,
          swidth: videoDims.width,
          sheight: videoDims.height,
          cwidth: can.width,
          cheight: can.height
        };
        img2.src = can.toDataURL();
        once = false;
        makeCanvasScrollable(can, ctx, videoDims.width, videoDims.height, img2);
        makeImgZoomable(img2, videoDims.width, videoDims.height, can, ctx);
      }
    };
    img.src = "chad.jpg";
  }
  function makeGridSlider(width, height, can, ctx, img, img2) {
    var yslider = document.createElement("input");
    var original = [width, height];
    yslider.type = "range";
    let label = document.createElement("p");
    label.innerHTML = ".5";
    label.style.color = "white";
    document.querySelector("#dials").append(yslider);
    document.querySelector("#dials").append(label);
    let videoDims = video.getBoundingClientRect();
    can.style.top = `${videoDims.y}px`;
    can.style.left = `${videoDims.x}px`;
    attrHelper(yslider, {
      min: 0,
      max: 0.5,
      value: 0.5,
      step: 0.0001
    });

    yslider.style.width = `${width - 20}px`;
    yslider.addEventListener("input", () => {
      ctx.clearRect(0, 0, can.width, can.height);
      ctx.globalAlpha = GA;

      ctx.drawImage(
        img,
        0,
        0,
        can.width,
        (can.width / width) * height,
        0,
        0,
        width,
        height
      );
      let scale = parseFloat(yslider.value);
      label.innerHTML = `${scale}`;
      // horizontal lines
      let number = Math.ceil(1 / scale);
      ctx.lineWidth = 1;
      for (let i = 0; i < number; i++) {
        ctx.beginPath();
        ctx.moveTo(0, i * (height * scale));
        ctx.lineTo(width, i * (height * scale));
        ctx.closePath();
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(i * (width * scale), 0);
        ctx.lineTo(i * (width * scale), height);
        ctx.closePath();
        ctx.stroke();
      }
      // vertical lines

      img2.src = can.toDataURL();
    });
  }
  function makeGrid(can, ctx, width, height, x, y) {
    let frac = height / y;

    ctx.lineWidth = 0.5;
    for (let i = 1; i < y; i++) {
      ctx.beginPath();
      ctx.moveTo(0, i * frac);
      ctx.lineTo(width, i * frac);
      ctx.closePath();
      ctx.stroke();
    }
  }
  function attrHelper(el, ob) {
    for (let at in ob) {
      el.setAttribute(at, ob[at]);
    }
  }
  function makeImgZoomable(img, width, height, can, ctx) {
    var yslider = document.createElement("input");
    var original = [width, height];
    yslider.type = "range";

    attrHelper(yslider, {
      min: 0,
      max: 1,
      value: 0,
      step: 0.0001,
      orient: "vertical"
    });
    yslider.style.height = `${height}px`;
    yslider.style.position = "absolute";
    yslider.style.top = "110px";
    yslider.style.left = `2px`;
    yslider.style.width = "20px";
    let wratio = can.width / width;
    let hratio = can.height / height;
    yslider.style["-webkit-appearance"] = "slider-vertical";
    yslider.addEventListener("input", function() {
      yslider.style.top = `${video.getBoundingClientRect().top}px`;
      scalefactor = parseFloat(yslider.value);

      lastDeets.swidth = can.width * scalefactor; // canceled the /width*width, normally expression is can.wid/width*width*sf
      lastDeets.sheight = (can.width / width) * height * scalefactor;
      ctx.clearRect(0, 0, width, height);
      ctx.globalAlpha = GA;
      ctx.drawImage(
        img,
        lastDeets.sx,
        lastDeets.sy,
        lastDeets.swidth,
        lastDeets.sheight,
        0,
        0,
        width,
        height
      );
    });
    document.querySelector("#dials").append(yslider);
    document.body.append(yslider);
  }
  function makeCanvasScrollable(canvas, ctx, width, height, img) {
    var last = { x: 0, y: 0 };
    var start;
    var moving;
    let p = document.querySelector("#log");
    // Set up touch events for mobile, etc
    canvas.addEventListener(
      "touchstart",
      function(e) {
        var touch = e.touches[0];
        if (scalefactor == undefined) {
          scalefactor = 1;
        }
        start = {
          x: touch.clientX * (scalefactor * scalefactor),
          y: touch.clientY * (scalefactor * scalefactor)
        };
      },
      false
    );
    canvas.addEventListener(
      "touchend",
      function(e) {
        last = {
          x: last.x + (start.x - moving.x),
          y: last.y + (start.y - moving.y)
        };
      },
      false
    );
    canvas.addEventListener(
      "touchmove",
      function(e) {
        var touch = e.touches[0];
        moving = {
          x: touch.clientX * (scalefactor * scalefactor),
          y: touch.clientY * (scalefactor * scalefactor)
        };
        // calculate change from start
        var delta = { x: start.x - moving.x, y: start.y - moving.y };
        lastDeets.sx = last.x + delta.x;
        lastDeets.sy = last.y + delta.y;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
          img,
          last.x + delta.x,
          last.y + delta.y,
          lastDeets.swidth,
          lastDeets.sheight,
          0,
          0,
          width,
          height
        );
      },
      false
    );

    // Prevent scrolling when touching the canvas
    document.body.addEventListener(
      "touchstart",
      function(e) {
        if (e.target == canvas) {
          e.preventDefault();
        }
      },
      { passive: false }
    );
    document.body.addEventListener(
      "touchend",
      function(e) {
        if (e.target == canvas) {
          e.preventDefault();
        }
      },
      { passive: false }
    );
    document.body.addEventListener(
      "touchmove",
      function(e) {
        if (e.target == canvas) {
          e.preventDefault();
        }
      },
      { passive: false }
    );
  }

  // Get the position of a touch relative to the canvas
  function getTouchPos(canvasDom, touchEvent) {
    var rect = canvasDom.getBoundingClientRect();
    return {
      x: touchEvent.touches[0].clientX - rect.left,
      y: touchEvent.touches[0].clientY - rect.top
    };
  }

  function makeSliders(width, height, ctx, img, ysliderLeft) {
    function attrHelper(el, ob) {
      for (let at in ob) {
        el.setAttribute(at, ob[at]);
      }
    }
    let mysx = 0;
    let mysy = 0;
    // make some sliders
    var xslider = document.createElement("input");
    xslider.type = "range";
    attrHelper(xslider, { min: 0, max: img.width, step: 1 });
    xslider.style.width = `${width}px`;
    xslider.addEventListener("input", function() {
      mysx = parseInt(xslider.value);
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(
        img,
        mysx,
        img.height - mysy,
        width,
        height,
        0,
        0,
        width,
        height
      );
    });
    document.querySelector("#holder").append(xslider);
    var yslider = document.createElement("input");
    yslider.type = "range";
    attrHelper(yslider, {
      min: 0,
      max: img.height,
      step: 1,
      value: img.height,
      orient: "vertical"
    });
    yslider.style.height = `${height}px`;
    yslider.style.position = "absolute";
    yslider.style.left = `${ysliderLeft}px`;
    yslider.style.top = "20px";
    yslider.addEventListener("input", function() {
      mysy = parseInt(yslider.value);
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(
        img,
        mysx,
        img.height - mysy,
        width,
        height,
        0,
        0,
        width,
        height
      );
    });
    document.body.append(yslider);
  }

  window.onload = function() {
    var input = document.getElementById("input");
    input.addEventListener("change", handleFiles, false);
  };

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
  /*
video: {
        facingMode: {
          exact: "environment"
        }
      }
      */
})
</script>

<style>
</style>

<div id="dials">
  <input type="file" id="input" />
  <button id="flashlight">Light</button>
</div>
<div id="holder" />
