var randomYear = () => {
    return Math.floor(Math.random()*21 + 1930);
}

var talkEvaluation = (e) => {
    return e.toUppercase()? true : false;
}

var talk = prompt('Talk to Grandma')

var grandmaResponse = (talk) => {
    prompt();
    while (talk !== 'BYE') {
        if(talk !== talkEvaluation(talk)) {
            return "Huh? Speak Up Sonny";
        }else {
            return `No. Since ${rendomYear}`
        }
    }

    return 'BYE';
}

console.log(grandmaResponse(talk));