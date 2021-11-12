console.clear();
let studentns;
studentns = [
    ["6301001", "Kongpop In", 27, 31, 28, 0],
    ["6301002", "Jakrit Yo", 24, 35, 25, 0],
    ["6301003", "Chalermchai Nk", 25, 37, 21, 0],
    ["6301004", "Tanad Nl", 20, 30, 20, 0],
    ["6301005", "Chawanwit CSV", 16, 23, 25, 0],
];
function gradCalculator(score) {
    if (score < 50)
        return 0;
    else if (score <= 54)
        return 1;
    else if (score <= 59)
        return 1.5;
    else if (score <= 64)
        return 2;
    else if (score <= 69)
        return 2.5;
    else if (score <= 74)
        return 3;
    else if (score <= 79)
        return 3.5;
    else
        return 4;
}
studentns.forEach(s => {
    let total = s[2] + s[3] + s[4];
    console.log(`${s[0]}:${s[1]}, Total: ${total}, Grade: ${gradCalculator(total)}`);
});
