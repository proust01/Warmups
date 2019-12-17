// 1. drinking age

// var value = prompt("What is your age?");
// var age = Number(value);

// if(age<18) {
//     console.log("You're under 18")
// }else{
//     console.log("Enjoy your drink");
// }

// 2. Air Conditioning
// data.main.temp - 273.15

function weatherBalloon( cityID ) {
    var key = '5e4a9aeb5c0eff7908fa9dd66892cac0';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityID+ '&appid=' + key)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      console.log(data);
    })
    .catch(function() {
      // catch any errors
    });
  }
  
//   window.onload = function() {
//     weatherBalloon( "Melbourne,AU" );
//   }

var currentTemp = async function() {
    var result = await weatherBalloon( "Melbourne,AU");
    return result;
  }
  console.log(currentTemp());
  

// var isFunctional = true;

var ac = prompt("is the AC working?");
var desiredTemp = Number(prompt("What temp would you prefer?"));

function checkAC() {
    if(ac === "yes" && currentTemp < desiredTemp) {
        return "Turn on the AC please"
    } else if(ac !== "yes" && currentTemp > desiredTemp) {
        return "Fix the AC now it's hot!"
    } else if(ac !== "yes" && currentTemp < desiredTemp) {
        return "Fix the A/C whenever you have the chance... It's cool..."
    } else {
        return "You didn't put valid answer."
    }
}

console.log(checkAC());

// 3. Melbourne Surburb

// var Suburb;

// do{
//     suburb = prompt("What suburb you live in");
//     if(suburb.trim() !== "") {
//         console.log('I heard ' + suburb.trim() + ' is a nice place');
//     } else {
//         alert('You did not say anything');
//     }
// } while(suburb.trim() === '')

