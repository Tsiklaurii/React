function equality(a, b) {
    if (a === b) {
        return "ტოლია";
    } else {
        return "არ არის ტოლი";
    }
}
function fahrenheitToCelsius(fahrenheit) {
    if (typeof fahrenheit === "number") {
        return ((fahrenheit - 32) * 5) / 9;
    } else {
        return false;
    }
}
function operation(a, b, operation) {
    if (typeof a === "number" && typeof b === "number") {
        if (operation === "+") {
            return a + b;
        } else if (operation === "-") {
            return a - b;
        } else if (operation === "*") {
            return a * b;
        } else if (operation === "/" && b !== 0) {
            return a / b;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
