function randomWords(){
    var readME = "ஆல், இல், கல், கால், கொல், கோல், சூல், செல், சொல், அம்மா, அப்பா, அண்ணன், தங்கை, மகன், மகள், தாத்தா, பாட்டி, ஆயா, அத்தை, மாமா, மாமி, அத்தான், சித்தி, சித்தப்பா, பெரியம்மா, பெரியப்பா, மருமகன், மருமகள், பெயரன், பெயர்த்தி, மைத்துனன், தாரம், கணவன், மனைவி, ஆய";
    var wordArr = readME.split(', ');

    /*words = (words > wordArr.length) ? wordArr.length : words;

    var randWords = [];
    for (let i = 0; i < words; i++){
        let newRandom;
        do {
            let rand = Math.floor(Math.random() * wordArr.length);
            newRandom = wordArr[rand];
        } while (randWords.includes(newRandom));

        randWords.push(newRandom);
    }
    return randWords.join(', ');*/

    let rand = Math.floor(Math.random() * wordArr.length);
    return wordArr[rand];

}

export default randomWords;