const Runtime = require("jest-runtime");

class Shape {
    static imageWidth = 300;
    static imageHeight = 200;
    constructor(shapeColor, textColor, text) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.text = text;
    }

    /* Returns a string for the corresponding SVG file with the given shape color */
    render() {
        throw new Error('Child class should implement render function')
    }
}

class Triangle extends Shape {
    constructor(shapeColor, textColor, text) {
        super(shapeColor, textColor, text);
    }
    render() {
        const svgMarkup = `polygon points="0,${Shape.imageHeight} ${Shape.imageWidth / 2},0 ${Shape.imageWidth},${Shape.imageHeight}"`;
        const style = `fill:${this.shapeColor}`;
        const fontSize = Math.min(Shape.imageWidth / this.text.length, Shape.imageHeight);
        const txt = `<text x="${Shape.imageWidth / 2}" y="${Shape.imageHeight - Shape.imageHeight / 3}" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}" font-size="${fontSize - (fontSize / 4)}">${this.text}</text>`;
        return `<svg height="${Shape.imageHeight}" width="${Shape.imageWidth}"><${svgMarkup} style="${style}"/> ${txt} </svg>`
    }

}

class Circle extends Shape {
    constructor(shapeColor, textColor, text) {
        super(shapeColor, textColor, text);
    }
    render() {
        let radius = Math.min(Shape.imageWidth / 2, Shape.imageHeight / 2);
        let svgMarkup = `circle cx="${Shape.imageWidth / 2}" cy="${Shape.imageHeight / 2}" r="${radius}"`;
        const style = `fill:${this.shapeColor}`;
        const fontSize = Math.min(Shape.imageWidth / this.text.length, Shape.imageHeight);
        const txt = `<text x="${Shape.imageWidth / 2}" y="${Shape.imageHeight / 2}" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}" font-size="${fontSize - (fontSize / 10)}">${this.text}</text>`;
        return `<svg height="${Shape.imageHeight}" width="${Shape.imageWidth}"><${svgMarkup} style="${style}"/> ${txt} </svg>`
    }
}

class Square extends Shape {
    constructor(shapeColor, textColor, text) {
        super(shapeColor, textColor, text);
    }
    render() {
        let side = Math.min(Shape.imageHeight, Shape.imageWidth);
        let xCord = 0;
        let yCord = 0;
        if (Shape.imageHeight > Shape.imageWidth) {
            yCord = (Shape.imageHeight - Shape.imageWidth) / 2;
        } else {
            xCord = (Shape.imageWidth - Shape.imageHeight) / 2;
        }
        let svgMarkup = `rect x="${xCord}" y="${yCord}" width="${side}" height="${side}"`;
        const style = `fill:${this.shapeColor}`;
        const fontSize = Math.min(Shape.imageWidth / this.text.length, Shape.imageHeight);
        const txt = `<text x="${xCord + (side / 2)}" y="${yCord + (side / 2)}" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}" font-size="${fontSize - (fontSize / 10)}">${this.text}</text>`;
        return `<svg height="${Shape.imageHeight}" width="${Shape.imageWidth}"><${svgMarkup} style="${style}"/> ${txt} </svg>`
    }
}

module.exports = {
    Shape,
    Triangle,
    Square,
    Circle
}