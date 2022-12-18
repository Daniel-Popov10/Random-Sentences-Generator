function randomSentenceGenerator() {

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });



    console.log('Hello, this is your first random-generated sentence:');

    let recursiveAsyncLine = function () {


        let names = ['Daniel', 'Martin', 'John', 'Steven', 'Victor'];
        let places = ['New York', 'Paris', 'Plovdiv', 'Rome', 'Sofia'];
        let verbs = ['eats', 'hold', 'drinks', 'sees', 'brings'];
        let nouns = ['stones', 'cake', 'apple', 'carrot', 'laptop'];
        let adverbs = ['slowly', 'rapidly', 'sadly', 'warmly', 'carefuly'];
        let details = ['near the river', 'in the park', 'at home', 'in the pool'];

        function getRandomWord(array) {
            let word = array[Math.floor(Math.random() * array.length)];

            return word;
        }

        let randomName = getRandomWord(names);
        let randomPlace = getRandomWord(places);
        let randomVerbs = getRandomWord(verbs);
        let randomNouns = getRandomWord(nouns);
        let randomAdverbs = getRandomWord(adverbs);
        let randomDetails = getRandomWord(details);

        let sentence = `${randomName} from ${randomPlace} ${randomAdverbs} ${randomVerbs} ${randomNouns} ${randomDetails}`;
        console.log(sentence);


        readline.question('Click [Enter] to generate a new one.', string => {
            sentence = string;

            recursiveAsyncLine();

        });


    }

    recursiveAsyncLine();
}

randomSentenceGenerator();