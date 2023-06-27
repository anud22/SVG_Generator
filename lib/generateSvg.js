const { Square, Triangle, Circle } = require('./shapes');

function generateSvgTxt(data){
    const shape = data.shape.toLowerCase();
    switch(shape){
        case ('triangle'):{
            const triangle = new Triangle(data.shapeColor.toLowerCase(), data.textColor.toLowerCase(), data.text);
            return triangle.render();
       }
        case('circle'):{
            const circle = new Circle(data.shapeColor.toLowerCase(), data.textColor.toLowerCase(), data.text);
            return circle.render();
        }
        case('rectangle'):{
            const square = new Square(data.shapeColor.toLowerCase(), data.textColor.toLowerCase(), data.text);
            return square.render();
        }
        default:
            throw new Error('Shape not supported');
    }

}

module.exports = generateSvgTxt;

