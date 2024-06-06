const roomDimensions = {
    width: 50,
    length: 100,
    getArea() {
        return this.width * this.length;
    }
}

// Binding the getArea function to the roomDimensions object
const boundGetArea = roomDimensions.getArea.bind(roomDimensions);