var x = findOppositeNumber(10, 2);
document.getElementById('bai1').innerHTML = x;
var y = findOppositeNumber(10, 6);
document.getElementById('bai11').innerHTML = y;

function findOppositeNumber(n, firstNum) {
    if (firstNum >= 0 && firstNum <= n / 2) {
        return n / 2 + firstNum;
    }
    else if (firstNum > n / 2 && firstNum <= n - 1) {
        return firstNum - n / 2;
    }
};

console.log(findOppositeNumber(20, 8));