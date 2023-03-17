class Sum{
   constructor(num1, num2) {
      this.num1 = num1;
      this.num2 = num2;
   }
   total () {
      return this.num1 + this.num2;
   }
}

var total = new Sum(5,5);
console.log(total.total());