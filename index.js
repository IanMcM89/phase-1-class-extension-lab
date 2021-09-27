class Polygon{
    constructor(array) {
      this.shape = array;
    }
    get countSides() {
        return this.shape.length;
    }
    get perimeter(){
      return this.shape.reduce(((total, side) => total + side));
    }
  }
  
  class Triangle extends Polygon {
    get isValid(){
      let s = this.shape;
      let a = s[0], b = s[1], c = s[2];
      return (a + b) >= c && (b + c) >= a && (c + a) >= b ? true : false;
    }
  }
  
  class Square extends Polygon {
    get isValid(){
      let s = this.shape;
      let a = s[0], b = s[1], c = s[2], d = s[3];
      return a === b && a === c && a === d ? true : false;
    }
    get area(){
      return this.shape[0] ** 2;
    }
  }
  
  let polygon = new Polygon( [ 5, 5, 5 ] );
  let triangle = new Triangle( [ 5, 5, 5 ] );
  let triangle2 = new Triangle( [ 15, 10, 1 ] );
  let square = new Square( [ 5, 5, 5, 5 ] );
  let square2 = new Square( [ 5, 4, 3, 2 ] );
  
  console.log(polygon.countSides); //=> 3
  console.log(polygon.perimeter); //=> 15
  console.log('');
  
  console.log(triangle.countSides); //=> 3
  console.log(triangle.perimeter); //=> 15
  console.log(triangle2.perimeter); //=> 26
  console.log(triangle.isValid); //=> true
  console.log(triangle2.isValid); //=> false
  console.log('');
  
  console.log(square.countSides); //=> 4
  console.log(square.perimeter); //=> 20
  console.log(square.area); //=> 25
  console.log(square.isValid); //=> true
  console.log(square2.isValid); //=> false