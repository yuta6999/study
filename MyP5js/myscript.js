/*
キー入力
keyIsPressed

keyTyped(): 特殊キーを無視
keyPressed(): 大文字小文字を区別しない

key: 通常キー
keyCode: 特殊キー ALT ENTER TAB
*/

var r = 50;

function setup() {
  createCanvas(480, 240);
}

function draw() {
  noStroke();
  background('skyblue');

  if (keyIsPressed === true) {
    fill('pink');
  } else {
    fill('white');
  }

  ellipse(mouseX, mouseY, r, r);
}

// function keyTyped() {
//   if (key === 'u') {
//     r += 10;
//   }
//   return false;
// }

function keyPressed() {
  if (keyCode === UP_ARROW) {
    r += 10;
  }
  return false;
}