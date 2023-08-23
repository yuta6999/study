// // // // // 'use strict';

// // // // // {
// // // // //   function draw() {
// // // // //     const canvas = document.querySelector('canvas');
// // // // //     if (typeof canvas.getContext === 'undefined') {
// // // // //       return;
// // // // //     }
// // // // //     const ctx = canvas.getContext('2d');

// // // // //     ctx.beginPath();
// // // // //     ctx.moveTo(50, 50);
// // // // //     ctx.lineTo(100, 50);
// // // // //     ctx.lineTo(100, 100);
// // // // //     ctx.closePath();
    
// // // // //     // ctx.stroke();
// // // // //     ctx.fill();
// // // // //   }

// // // // //   draw();
// // // // // }

// // // // 'use strict';

// // // // {
// // // //   function draw() {
// // // //     const canvas = document.querySelector('canvas');
// // // //     if (typeof canvas.getContext === 'undefined') {
// // // //       return;
// // // //     }
// // // //     const ctx = canvas.getContext('2d');

// // // //     ctx.beginPath();
// // // //     ctx.moveTo(100, 50,);
// // // //     ctx.lineTo(200, 50);
// // // //     ctx.setLineDash([5, 10]);
// // // //     ctx.stroke();

// // // //     ctx.beginPath();
// // // //     ctx.moveTo(100, 100,);
// // // //     ctx.lineTo(200, 100);
// // // //     ctx.setLineDash([]);
// // // //     ctx.stroke();

// // // //     ctx.beginPath();
// // // //     ctx.moveTo(100, 150,);
// // // //     ctx.lineTo(200, 150);
// // // //     ctx.lineWidth = 16;
// // // //     ctx.lineCap = 'round';
// // // //     ctx.stroke();
// // // //   }

// // // //   draw();
// // // // }

// // // 'use strict';

// // // {
// // //   function draw() {
// // //     const canvas = document.querySelector('canvas');
// // //     if (typeof canvas.getContext === 'undefined') {
// // //       return;
// // //     }
// // //     const ctx = canvas.getContext('2d');

// // //     // ctx.arc(x, y, r, start, end);
// // //     // ctx.arc(100, 100, 50, 0, 2 * Math.PI);
// // //     // ctx.arc(100, 100, 50, 0, 300 / 360 * 2 * Math.PI);
// // //     // ctx.arc(100, 100, 50, 0, 300 / 180 * Math.PI);
// // //     ctx.moveTo(100, 100);
// // //     ctx.arc(100, 100, 50, 0, 300 / 180 * Math.PI, true);
    
// // //     // ctx.stroke();
// // //     ctx.fill();
// // //   }

// // //   draw();
// // // }

// // 'use strict';

// // {
// //   function draw() {
// //     const canvas = document.querySelector('canvas');
// //     if (typeof canvas.getContext === 'undefined') {
// //       return;
// //     }
// //     const ctx = canvas.getContext('2d');

// //     ctx.beginPath();
// //     ctx.moveTo(0, 100);
// //     ctx.lineTo(canvas.width, 100);
// //     ctx.moveTo(100, 0);
// //     ctx.lineTo(100, canvas.height);
// //     ctx.stroke();

// //     ctx.font = 'bold 64px Verdana';
// //     ctx.textAlign = 'right';
// //     ctx.textBaseline = 'top';

// //     // ctx.fillText('Tokyo', 100, 100);
// //     // ctx.fillText('Tokyo', 100, 100, 100);
// //     ctx.strokeText('Tokyo', 100, 100, 100);
// //   }

// //   draw();
// // }

// 'use strict';

// {
//   let t = 0;

//   function draw() {
//     const canvas = document.querySelector('canvas');
//     if (typeof canvas.getContext === 'undefined') {
//       return;
//     }
//     const ctx = canvas.getContext('2d');

//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     ctx.beginPath();
//     ctx.ellipse(100, 100, 40, 30, 0, 0, 2 * Math.PI);
//     ctx.fillStyle = 'black';
//     ctx.fill();

//     ctx.beginPath();
//     ctx.ellipse(80 + Math.sin(t / 30), 100, 8, 8, 0, 0, 2 * Math.PI);
//     ctx.ellipse(120 + Math.sin(t / 30), 100, 8, 8, 0, 0, 2 * Math.PI);
//     ctx.fillStyle = 'skyblue';
//     ctx.fill();

//     t++;
//     setTimeout(draw, 10);
//   }

//   draw();
// }

'use strict';

{
  let t = 0;

  function draw() {
    const canvas = document.querySelector('canvas');
    if (typeof canvas.getContext === 'undefined') {
      return;
    }
    const ctx = canvas.getContext('2d');

    const CANVAS_WIDTH = 600;
    const CANVAS_HEIGHT = 240;
    const dpr = window.devicePixelRatio || 1;

    console.log(dpr);
    
    canvas.width = CANVAS_WIDTH * dpr;
    canvas.height = CANVAS_HEIGHT * dpr;
    ctx.scale(dpr, dpr);
    canvas.style.width = CANVAS_WIDTH + 'px';
    canvas.style.height = CANVAS_HEIGHT + 'px';

    ctx.font = 'bold 48px Verdana';
    ctx.strokeText('Tokyo', 100, 100);
  }

  draw();
}