export class Ball {
  constructor(ctx, options = {}) {
    this.ctx = ctx;
    this.options = Object.assign(
      {
        startX: 100, // x坐标
        speed: 2, // 移动速度
        direction: true, // 小球初始方向，true向左，false向右
        color: "red", // 小球颜色
        radius: 10, // 小球半径
      },
      options
    );
    this.startX = this.options.startX;
    this.speed = this.options.speed;
    this.direction = this.options.direction;
    this.color = this.options.color;
    this.radius = this.options.radius;
    this.flag = false; // 小球碰壁标记
  }
  //初始化小球
  initBall() {
    this.clear();
    this.ctx.beginPath(); //开始绘制
    this.ctx.arc(this.startX, this.radius, this.radius, 0, 2 * Math.PI); //画圆,前两个参数是圆的中心坐标
    this.ctx.fillStyle = this.color; //填充颜色
    this.ctx.closePath(); //结束绘制
    this.ctx.fill(); //填充
  }
  //清除小球，小球一周的正方形
  clear() {
    this.ctx.clearRect(
      this.startX - this.radius,
      0,
      this.radius * 2,
      this.radius * 2
    );
  }
  //小球运动，控制碰壁
  run() {
    switch (this.direction) {
      case true:
        if (this.startX >= this.radius) {  // 向左，一直没碰壁就减少坐标，否则换方向
          this.clear();
          this.startX = this.startX - this.speed;
          this.initBall();
        } else {
          this.direction = !this.direction;
        }
        break;
      case false:
        if (this.startX <= 400 - this.radius) { // 向右，一直没碰壁就增加坐标，否则换方向
          this.clear();
          this.startX = this.startX + this.speed;
          this.initBall();
        } else {
          this.direction = !this.direction;
        }
        break;
    }
  }
}
export function initCanvas(ctx, opt) {
  let ball = new Ball(ctx, opt);
  ball.initBall();
  return ball;
}
