<script>
  let canvas, ctx, img;
  let GA = 0.1;
  let filterstate = false;
  let slowstate = "slo-mo";
  let gridNum = 10;
  let slow = 1;
  let zoom = 1;
  let sx = 0;
  let sy = 0;
  let maxX = 0;
  let maxY = 0;
  let ch = 500;
  let cw = 800;
  let img2 = new Image();
  import { onMount } from "svelte";
  onMount(() => {
    canvas.height = ch;
    canvas.width = cw;
  });
  let handleFiles = e => {
    let URL = window.webkitURL || window.URL;
    ctx = canvas.getContext("2d");
    img = new Image();
    img.onload = () => {
      maxX = img.width;
      maxY = img.height;
      canvas.width = img.width;
      canvas.height = img.height;
      let conversion = img.width / canvas.width;
      //
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        0,
        0,
        canvas.width,
        img.height / conversion
      );
      img2.src = canvas.toDataURL();
    };
    let url = URL.createObjectURL(e.target.files[0]);
    img.src = url;

    // make the grid

    // canvas events
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
      sx = last.x + delta.x;
      sy = last.y + delta.y;
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
  };

  let slowFunc = () => {
    if (slow == 1) {
      slow = 0.1;
      slowstate = "super-slow-mo";
    } else if (slow == 0.1) {
      slow = 0.01;
      slowstate = "fast-mo";
    } else {
      slow = 1;
      slowstate = "slo-mo";
    }
  };

  let func = () => {
    if (ctx == undefined) return;

    canvas.width = cw;
    canvas.height = ch;
    ctx.globalAlpha = GA;
    ctx.drawImage(
      img2,
      sx,
      sy,
      img.width * zoom,
      img.height * zoom,
      0,
      0,
      canvas.width,
      (img.height * canvas.width) / img.width
    );
  };
  $: if (GA) {
    console.log(sx, sy, GA, zoom);
    func();
  }
  let grid = () => {
    if (ctx == undefined) return;
    console.log("running grid");
    canvas.width = img.width;
    canvas.height = img.height;
    let conversion = img.width / canvas.width;
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      0,
      0,
      canvas.width,
      img.height / conversion
    );
    // makee the x grid
    ctx.lineWidth = 1;
    ctx.strokeStyle = "white";
    for (let i = 0; i < gridNum; i++) {
      ctx.beginPath();
      ctx.moveTo(0, (canvas.height / gridNum) * i);
      ctx.lineTo(canvas.width, (canvas.height / gridNum) * i);
      ctx.closePath();
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo((canvas.width / gridNum) * i, 0);
      ctx.lineTo((canvas.width / gridNum) * i, canvas.height);
      ctx.closePath();
      ctx.stroke();
    }
    img2.src = canvas.toDataURL();
  };
  $: if (gridNum) {
    console.log(gridNum);
    grid();
  }
</script>

<style>
  canvas {
    position: absolute;
    top:0px;
    z-index: 20;
  }
</style>

<canvas bind:this={canvas} />
<div id="holder">
  <div id="fileupload">
    <input type="file" on:change={handleFiles} />
  </div>
  <div id="zoom">
    <label for="">
      zoom
      <input type="text" min="0" max="1" bind:value={zoom} />
      <input type="range" min="0" max="1" step=".0001" bind:value={zoom} />
    </label>
  </div>
  <div id="grid">
    <label for="">
      grid
      <input type="text" min="5" max="20" bind:value={gridNum} />
      <input type="range" min="5" max="20" step="1" bind:value={gridNum} />
    </label>
  </div>
  <div id="GA">
    <label for="">
      Global Alpha
      <input type="text" min="0" max="1" bind:value={GA} />
      <input type="range" min="0" max="1" step=".001" bind:value={GA} />
    </label>
  </div>
  <div id="slowmo">
<button on:click={slowFunc}>{slowstate}</button>
  </div>
</div>
