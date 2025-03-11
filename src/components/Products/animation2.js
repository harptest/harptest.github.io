var width,
  height,
  canvas,
  ctx,
  points,
  target,
  animateHeader = true;
import { gsap } from "gsap";
// Main Initialization
export function initHeader() {
  width = window.innerWidth;
  height = window.innerHeight;
  target = { x: width / 2, y: height / 2 };

  canvas = document.getElementById("demo-canva");
  canvas.width = width;
  canvas.height = height;
  ctx = canvas.getContext("2d");

  // create points
  points = [];
  for (var x = 0; x < width; x = x + width / 10) {
    for (var y = 0; y < height; y = y + height / 20) {
      var px = x + (Math.random() * width) / 10;
      var py = y + (Math.random() * height) / 10;
      var p = { x: px, originX: px, y: py, originY: py };
      points.push(p);
    }
  }

  // for each point find the closest points
  for (var i = 0; i < points.length; i++) {
    var closest = [];
    var p1 = points[i];
    for (var j = 0; j < points.length; j++) {
      var p2 = points[j];
      if (!(p1 == p2)) {
        var placed = false;
        for (var k = 0; k < 3; k++) {
          if (!placed) {
            if (closest[k] == undefined) {
              closest[k] = p2;
              placed = true;
            }
          }
        }

        for (var k = 0; k < 3; k++) {
          if (!placed) {
            if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
              closest[k] = p2;
              placed = true;
            }
          }
        }
      }
    }
    p1.closest = closest;
  }

  // assign a circle to each point
  for (var i in points) {
    var c = new Circle(
      points[i],
      2 + Math.random() * 5,
      "rgba(16, 71, 190, 0.2)"
    );
    points[i].circle = c;
  }
}

// Add Event Listeners
export function addListeners() {
  if (!("ontouchstart" in window)) {
    window.addEventListener("mousemove", mouseMove);
  }
  window.addEventListener("scroll", scrollCheck);
  window.addEventListener("resize", resize);
}

function mouseMove(e) {
  var posx = 0,
    posy = 0; // Initialize both posx and posy
  if (e.pageX || e.pageY) {
    posx = e.pageX;
    posy = e.pageY;
  } else if (e.clientX || e.clientY) {
    posx =
      e.clientX +
      document.body.scrollLeft +
      document.documentElement.scrollLeft;
    posy =
      e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }
  target.x = posx;
  target.y = posy;
}

function scrollCheck() {
  if (document.body.scrollTop > height) animateHeader = false;
  else animateHeader = true;
}

function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
}

// Animation functions
export function initAnimation() {
  animate();
  for (var i in points) {
    shiftPoint(points[i]);
  }
}

function animate() {
  // Clear the canvas before each frame
  ctx.clearRect(0, 0, width, height);

  for (var i in points) {
    // detect points in range
    var distanceToTarget = getDistance(target, points[i]);

    // Hide points and circles that are too close to the mouse (i.e. within a radius of 4000)
    if (distanceToTarget < 4000) {
      points[i].active = 0; // Set the point to inactive
      points[i].circle.active = 0; // Make the circle invisible
    } else if (distanceToTarget < 20000) {
      points[i].active = 0.1;
      points[i].circle.active = 0.3;
    } else if (distanceToTarget < 40000) {
      points[i].active = 0.2;
      points[i].circle.active = 0.4;
    } else {
      points[i].active = 0.3; // Make points further from the mouse more visible
      points[i].circle.active = 0.6;
    }

    // Only draw lines and circles for active points
    if (points[i].active > 0) {
      drawLines(points[i]); // Draw lines connecting points
      points[i].circle.draw(); // Draw the circle itself
    }
  }

  // Continuously request the next animation frame
  requestAnimationFrame(animate);
}

function shiftPoint(p) {
  gsap.to(p, {
    duration: 1 + 3 * Math.random(),
    x: p.originX - 50 + Math.random() * 100,
    y: p.originY - 50 + Math.random() * 100,
    ease: "circ.inOut", // Updated ease syntax
    onComplete: function () {
      shiftPoint(p);
    },
  });
}

function drawLines(p) {
  if (!p.active) return;
  for (var i in p.closest) {
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
    ctx.lineTo(p.closest[i].x, p.closest[i].y);
    ctx.strokeStyle = "rgba(16, 71, 190," + p.active + ")";
    ctx.stroke();
  }
}

function Circle(pos, rad, color) {
  var _this = this;
  _this.pos = pos || null;
  _this.radius = rad || null;
  _this.color = color || null;

  this.draw = function () {
    if (!_this.active) return;
    ctx.beginPath();
    ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 4 * Math.PI, false);
    ctx.fillStyle = "rgba(16, 71, 190," + _this.active + ")";
    ctx.fill();
  };
}

// Utility function to calculate the distance between points
function getDistance(p1, p2) {
  return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
}

// Export additional utility functions if needed
