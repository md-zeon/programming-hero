function calculateTriangle() {
    halfBaseHeight("triangle-base", "triangle-height", "triangle-area", "Triangle");
}

function calculateRectangle() {
    widthHeight("rectangle-width", "rectangle-height", "rectangle-area", "Rectangle");
}

function calculateParallelogram() {
    widthHeight("parallelogram-base", "parallelogram-height", "parallelogram-area", "Parallelogram");
}

function calculateRhombus() {
    halfBaseHeight("rhombus-diameter1", "rhombus-diameter2", "rhombus-area", "Rhombus");
}

function calculatePentagon() {
    halfBaseHeight("pentagon-perimeter", "pentagon-base", "pentagon-area", "Pentagon");
}

function calculateEllipse() {
    const a = getInputData("ellipse-a");
    const base = getInputData("ellipse-base");
    const area = (Math.PI * a * base).toFixed(3);
    addElement("ellipse-area", "Ellipse", area);
}