// warmup 1.
var currentYear = new Date().getFullYear();
var birthYear = 1979;
var birthdayHasPassed = true;

if(birthdayHasPassed) {
    console.log(`You're ${currentYear - birthYear} years old`)
}else if(!birthdayHasPassed) {
    console.log(`You're ${currentYear - birthYear -1} years old`)
}else {
    console.log(`You're either ${currentYear - birthYear} or ${currentYear - birthYear -1} years old`)
}

// warmup 2.
var i = 0;
while(i <= 200) {
    if(i%7 === 0) {
        console.log(i);
    }
    i++;
}

//warmup 3.
// var date = `February 29, ${currentYear} 01:15:00`;
var currentYear = new Date().getFullYear();

for(var i=0; i<101; i++) {
    if(new Date(`February 29, ${currentYear - i} 01:15:00`).getDate() === 29){
        console.log(currentYear - i);
    }
}


// warmup 4.
for(var i=100; i<=200; i++) {
    if(i%2 === 1 && i%4 !== 3) {
        console.log(i);
    }
}