// 1.
var num = 0;

function totalScores(arr) {
    for(var i=0; i<arr.length; i++) {
        num += arr[i];
    }

    return num;
}

var bobScore = [3, 2, 6, 11, 9, 2, 6, 9, 10];
var jimScore = [5, 12, 9, 22, 13, 7, 16, 10, 11];
var fishScore = [2, 2, 4, 5, 4, 3, 6, 4, 1];

console.log(totalScores(bobScore));
console.log(totalScores(jimScore));
console.log(totalScores(fishScore));

// over par

var par = [3, 4, 5, 5, 3, 3, 4, 3, 5];

function compareWithPar(arr1, arr2) {
    var overPar = [];
    for(var i=0; i<arr1.length; i++){
        // debugger
        overPar.push(arr1[i] - arr2[i]);
    }

    return overPar;
}

var bobOverPar = compareWithPar(bobScore, par);
var jimOverPar = compareWithPar(jimScore, par);
var fishOverPar = compareWithPar(fishScore, par);

console.log(bobOverPar);
console.log(jimOverPar);
console.log(fishOverPar);

// get winner

var totalOwing = {
    bob: totalScores(bobOverPar),
    jim: totalScores(jimOverPar),
    fish: totalScores(fishOverPar)
};

function getWinner (obj) {
    var keyArr = Object.keys(obj);
    var valueArr = Object.values(obj);
    var winnerIndex = valueArr.indexOf(Math.min(...valueArr));
    return keyArr[winnerIndex];
}

console.log(getWinner(totalOwing));