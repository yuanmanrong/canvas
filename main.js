import './style.css'
import {Ball, initCanvas} from "./ball.js"

document.querySelector("#app").innerHTML= `<div>
<canvas
  id="canvas"
  width="400px"
  height="400px"
  style="background-color: azure"
></canvas>

<div>
  <button class="btn start">开始</button>
  <button class="btn end">停止</button>
</div>
</div>`

 //获取开始结束按钮
 let start = document.querySelector(".start");
 let end = document.querySelector(".end");

 //获取画布
 let canvas = document.getElementById("canvas");
 let ctx = canvas.getContext("2d");

 //实例化两个球
 let b1 = initCanvas(ctx, {
   startX: 100,
   speed: 1,
   //direction: true,
   color: "blue",
   radius: 20,
 });
 let b2 = initCanvas(ctx, {
   startX: 300,
   color: "red",
   speed: 6,
 });

 //使用requestAnimationFrame进行渲染
 function animate() {
   let b1Position = b1.startX;
   let b2Position = b2.startX;

 // 以b1小球的边坐标,判断是否在b2小球的坐标范围内，若在范围内，则两球碰撞，换方向   
   if (
     b2Position + b2.radius  >= b1Position - b1.radius &&
     b2Position - b2.radius <= b1Position + b1.radius
   ) {
     b1.direction = !b1.direction;
     b2.direction = !b2.direction;
   }
   b2.run();
   b1.run();
   stop = requestAnimationFrame(animate);
 }

 //按钮的点击事件
 start.addEventListener("click", function (e) {
   console.log("kaihsi");
   cancelAnimationFrame(stop); // 这里要取消，不然点击事件后会越来越快
   animate();
 });
 end.addEventListener("click", function () {
   console.log("jieshu");
   cancelAnimationFrame(stop);
 });