// procedural --------------------------------------------------
var width = 30;
var height = 20;
function calculateArea(width, height) {
  return width * height;
}
function calculateRange(width, height) {
  return 2 * (width + height);
}
var area = calculateArea(width, height);
var range = calculateRange(width, height);
// console.log(area);
// console.log(range);

// Object Oriented ---------------------------------------------
var rect = {
  width: 30,
  height: 20,
  calculateArea: function () {
    return this.width * this.height;
  },
  calculateRange: function () {
    return 2 * (this.width + this.height);
  },
};
// console.log(rect.calculateArea());
// console.log(rect.calculateRange());
