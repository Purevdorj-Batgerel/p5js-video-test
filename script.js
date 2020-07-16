let video;
const vScale = 10;

function setup() {
  const width = 64;
  const height = 48;

  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
}
function draw() {
  image(video, 0, 0);
  video.loadPixels();
  for (let y = 0; y < video.height; y++) {
    for (let x = 0; x < video.width; x++) {
      const index = (x + y * video.width) * 4;
      const r = video.pixels[index + 0];
      const g = video.pixels[index + 1];
      const b = video.pixels[index + 2];
      const bright = (r + g + b) / 3;
      fill(bright);
      rect(x * vScale, y * vScale, vScale, vScale);
    }
  }
}
