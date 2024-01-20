function solveEquation1() {
    const x = parseFloat(document.getElementById("inputX1").value);
    const y = parseFloat(document.getElementById("inputY1").value);
    const z = parseFloat(document.getElementById("inputZ1").value);

    const result = calculateEquation1(x, y, z);
    document.getElementById("result1").textContent = ` ${result}`;
    document.getElementById("calculation1").textContent = `Výpočet: ${x}^${y} + 2*${x}^${z} = ${Math.pow(x, y) + 2 * Math.pow(x, z)}`;
}

function solveEquation2() {
    const x = parseFloat(document.getElementById("inputX2").value);

    const result = calculateEquation2(x);
    document.getElementById("result2").textContent = ` ${result}`;
    document.getElementById("calculation2").textContent = `Výpočet: 3*${x}^3 + 5*${x}^2 - 12*${x} = ${3 * Math.pow(x, 3) + 5 * Math.pow(x, 2) - 12 * x}`;
}

function solveEquation3() {
    const x = parseFloat(document.getElementById("inputX3").value);
    const y = parseFloat(document.getElementById("inputY3").value);

    const result = calculateEquation3(x, y);
    document.getElementById("result3").textContent = ` ${result}`;
    document.getElementById("calculation3").textContent = `Výpočet: sqrt(${x}) / sqrt(${y}) = ${Math.sqrt(x) / Math.sqrt(y)}`;
}

function calculateEquation1(x, y, z) {
    // Výpočet pre prvu rovnicu
    return Math.pow(x, y) + 2 * Math.pow(x, z);
}

function calculateEquation2(x) {
    // Výpočet pre druhu rovnicu
    return 3 * Math.pow(x, 3) + 5 * Math.pow(x, 2) - 12 * x;
}

function calculateEquation3(x, y) {
    // Výpočet pre tretiu rovnicu
    return Math.sqrt(x) / Math.sqrt(y);
}