class Shape {
    constructor(imageWidth = 300, imageHeight = 200, strokeWidth = 2) {
        this.imageWidth = imageWidth;
        this.imageHeight = imageHeight;
        this.strokeWidth = strokeWidth;
    }
    setShapeAttributes(shapeColor, textColor, text) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.text = text;
    }

    render() {
        let svgMarkup = '';
        switch (true) {
            case this instanceof Triangle:
                svgMarkup = `<polygon points="0,0, ${this.imageWidth}-${this.strokeWidth - 1},${this.imageHeight}-${this.strokeWidth - 1} ${this.imageWidth}/2-${this.strokeWidth - 1},${this.imageHeight}/2-${this.strokeWidth - 1}"`;
                break;
            case this instanceof Square:
                let side = this.imageWidth > this.imageHeight ? this.imageHeight - this.strokeWidth - 1 : this.imageWidth - this.strokeWidth - 1;
                svgMarkup = `<rect x="0" y="0" width="${side}" height="${this.side}"`;
                break;
            case this instanceof Circle:
                let radius = this.imageWidth > this.imageHeight ? this.imageHeight / 2 - this.strokeWidth - 1 : this.imageWidth / 2 - this.strokeWidth - 1;
                svgMarkup = `<circle cx="${this.imageWidth}/2" cy="${this.imageHeight}/2" r="${radius}"`;
                break;
        }
        const style = `fill:${this.shapeColor};stroke:${this.textColor};stroke-width:${this.strokeWidth}`;
        return `<svg height="${this.imageHeight}" width="${this.imageWidth}"><${svgMarkup} style="${style}"/></svg>`
    }

}

class Triangle extends Shape {
    super(imageWidth, imageHeight, strokeWidth);
    setShapeAttributes(shapeColor, textColor, text);

}

class Circle extends Shape {
    super(imageWidth, imageHeight, strokeWidth);
    setShapeAttributes(shapeColor, textColor, text);
}

class Square extends Shape {
    super(imageWidth, imageHeight, strokeWidth);
    setShapeAttributes(shapeColor, textColor, text);
}

module.exports = {
    Shape,
    Triangle,
    Square,
    Circle
}