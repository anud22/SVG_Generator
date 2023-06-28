const {Square, Triangle, Circle, Shape} = require('./shapes');

//Test suite for Shape classes is created
describe('Shapes render functionality tests', () =>{
    //Test is created to check render functionality for Square
    describe('Render Square', () =>{
        it('should return false if square is not rendered correctly', () => {
        const square = new Square("Red", "green", "Abc");
        expect(square.render()).toEqual('<svg height=\"200\" width=\"300\"><rect x=\"50\" y=\"0\" width=\"200\" height=\"200\" style=\"fill:Red\"/> <text x=\"150\" y=\"100\" text-anchor=\"middle\" alignment-baseline=\"middle\" fill=\"green\" font-size=\"90\">Abc</text> </svg>');
        })
    })
    describe('Render Circle', () =>{
        it('should return false if circle is not rendered correctly', () => {
        const circle = new Circle("Red", "green", "Abc");
        expect(circle.render()).toEqual('<svg height=\"200\" width=\"300\"><circle cx=\"150\" cy=\"100\" r=\"100\" style=\"fill:Red\"/> <text x=\"150\" y=\"100\" text-anchor=\"middle\" alignment-baseline=\"middle\" fill=\"green\" font-size=\"90\">Abc</text> </svg>');
        })
    })
    describe('Render Triangle', () =>{
        it('should return false if triangle is not rendered correctly', () => {
        const triangle = new Triangle("Red", "green", "Abc");
        expect(triangle.render()).toEqual('<svg height=\"200\" width=\"300\"><polygon points=\"0,200 150,0 300,200\" style=\"fill:Red\"/> <text x=\"150\" y=\"133\" text-anchor=\"middle\" alignment-baseline=\"middle\" fill=\"green\" font-size=\"75\">Abc</text> </svg>');
        })
    })
})

describe('Verify child classes of Shapes', () =>{
    //Test is created to verify the Shapes instances
    describe('Square is inherited from Shape', () =>{
        it('should return false if square is not instance of Shape', () => {
        const square = new Square("Red", "green", "Abc");
        expect(square).toBeInstanceOf(Shape);
        })
    })
    describe('Circle is inherited from Shape', () =>{
        it('should return false if circle is not instance of Shape', () => {
        const circle = new Circle("Red", "green", "Abc");
        expect(circle).toBeInstanceOf(Shape);
        })
    })
    describe('Triangle is inherited from Shape', () =>{
        it('should return false if triangle is not instance of Shape', () => {
        const triangle = new Triangle("Red", "green", "Abc");
        expect(triangle).toBeInstanceOf(Shape);
        })
    })

})