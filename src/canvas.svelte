<script>
  //TODO make the program work for images that are taller than they are wide also.
  export let cw, ch;
  let canvas;
  let editor = (() => ({
    on: false,
    active() {
      return this.on;
    },
    run(x, y) {
      if (markstate == "mark-on") {
        this.mark(x, y);
      }
    },
    mark(x, y) {
      let bbox = canvas.getBoundingClientRect();
      octx.fillStyle = "red";
      let factor = canvas.height / img.height;
      x = x * (img.height / canvas.height)* zoom + sx - bbox.left;
      y = y * (img.height / canvas.height) * zoom + sy - bbox.top;
      octx.fillRect(x, y, 5, 5);
      img2.src = offscreen.toDataURL();
    }
  }))();
  let offscreen;
  let octx;
  let gridNum;
  let GA = 1;
  let ctx;
  let slowstate = 0;
  let slow = 1;
  let markstate = "mark-off";
  let slowState = "slow"
  let img = new Image();
  let img2 = new Image();
  import { onMount } from "svelte";
  let sx = 0,
    sy = 0,
    zoom = 1;
  let slowFunc  = ()=>{
    if (slowState == "slow") {
      slowState = "super-slow"
      slow = .1
    } else if ( slowState == "super-slow"){
      slow = .01
      slowState = "fast"
    } else if (slowState == "fast"){
      slowState = "slow"
      slow = 1
    }
  }
  let markFunc = () => {
    if (markstate == "mark-on") {
      markstate = "mark-off";
    } else {
      markstate = "mark-on";
    }
  };
  let reset = () => {
    // redraw on offcanvas and then reload the img2 and re issue draw canvas
    octx.drawImage(img, 0, 0);
    img2.src = offscreen.toDataURL();
  };
  let drawCanvas = () => {
    if (canvas == undefined) return;
    let finalwidth, finalheight;
    let factor = canvas.height / img.height;
    if (img.height > img.width) {
      finalwidth = (canvas.width * img.width) / img.height;
      finalheight = canvas.height;
    } else {
      finalwidth = img.width * factor;
      finalheight = canvas.height;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = GA;
    ctx.drawImage(
      img2,
      sx,
      sy,
      img.width * zoom,
      img.height * zoom,
      0,
      0,
      finalwidth,
      finalheight
    );
  };
  let handlefile = e => {
    let file = e.target.files[0]

    offscreen = document.createElement("canvas");
    ctx = canvas.getContext("2d");
    octx = offscreen.getContext("2d");
    img.onload = () => {
      offscreen.height = img.height;
      offscreen.width = img.width;
      //
      octx.drawImage(img, 0, 0);
      let data = octx.getImageData(0, 0, offscreen.width, offscreen.height);
      img2.src = offscreen.toDataURL();
      // document.body.append(offscreen)
      // console.log(img2)
      //ctx.drawImage(img2,0,0,offscreen.width,offscreen.height,0,0,canvas.width,canvas.height)
      //ctx.putImageData(data,0,0)
    };
    img.src = URL.createObjectURL(file);
    // img.src = "breonna.jpg";
    img2.onload = () => {
      drawCanvas();
    };
  };
  onMount(() => {
    // load chad,
    // then have second image that you store the canvas as
    canvas.height = ch;
    canvas.width = cw;

    let last = { x: 0, y: 0 };
    let start;
    let moving;
    canvas.addEventListener(
      "touchstart",
      function(e) {
        var touches = e.touches[0];
        start = {
          x: touches.clientX * slow,
          y: touches.clientY * slow
        };
        editor.run(start.x, start.y);
      },
      false
    );
    canvas.addEventListener("touchmove", function(e) {
      var touch = e.touches[0];
      moving = {
        x: touch.clientX * slow,
        y: touch.clientY * slow
      };
      let delta = { x: start.x - moving.x, y: start.y - moving.y };
      if (last.x + delta.x > -200 && last.y + delta.y > -200 && last.x + delta.x < img.width && last.y + delta.y < img.height) {
        sx = last.x + delta.x;
        sy = last.y + delta.y;
      }
    });
    canvas.addEventListener("touchend", function(e) {
      last = {
        x: last.x + (start.x - moving.x),
        y: last.y + (start.y - moving.y)
      };
    });
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
  });
  $: if (GA) {
    console.log(sx, sy, zoom, GA);
    drawCanvas();
  }
</script>

<style>
  canvas {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 20;
  }
  #holder {
    position: relative;
    z-index: 30;
    background: white;
  }
</style>

<canvas bind:this={canvas} />

<div id="holder">
  <div id="fileupload">
    <input type="file" on:change={handlefile} />
  </div>
  <div id="zoom">
    <label for="">
      zoom
      <input type="text" min="0" max="1" bind:value={zoom} />
      <input type="range" min="0" max="1" step=".0001" bind:value={zoom} />
    </label>
  </div>
  <div id="GA">
    <label for="">
      Global Alpha
      <input type="text" min="0" max="1" bind:value={GA} />
      <input type="range" min="0" max="1" step=".001" bind:value={GA} />
    </label>
  </div>
  <div id="slow">
    <button on:click={slowFunc}>{slowState}</button>
  </div>
  <div id="mark">
    <button on:click={markFunc}>{markstate}</button>
  </div>
  <div id="flash">
    <button id="flashlight">flashlight</button>
    <button on:click={reset}>Reset</button>
  </div>
</div>
