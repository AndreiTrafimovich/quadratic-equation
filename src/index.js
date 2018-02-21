module.exports = function solveEquation(equation) {
    equation = equation.replace(/\s/g, "");
    var reg = /(.+)\*x\^2(.+)\*x(.+)/g,
        equationArr = reg.exec(equation),
        a = +equationArr[1],
        b = +equationArr[2],
        c = +equationArr[3],
        x1,
        x2;

    var d = b*b - 4*a*c;

    if (d < 0) {
        throw ('No valid results');

        breake;
    };

    if (d > 0) {
        x1 = Math.round((-b - Math.sqrt(d))/(2*a));
        x2 = Math.round((-b + Math.sqrt(d))/(2*a));

        return [x1,x2].sort(function (a2, b2) {return a2 - b2});
    }

    if (d = 0) {
        x1 = x2 = Math.round(-b/(2*a));

        return [x1,x2];
    };
};
