

let randNum = 0;

function random() {
    randNum = Math.floor(Math.random()*10);
    return randNum;
}

random();
switch(randNum) {
    case 0:
    console.log('The big issues are work, career, or status right now.');
    break;
    case 1:
    console.log('Do not seek so much to find the answer as much as to understand the question better.');
    break;
    case 2:
    console.log('Sing and rejoice, fortune is smiling on you.');
    break;
    case 3:
    console.log('Dogs have owners, cats have staff.ao');
    break;
    case 4:
    console.log('You will be selected for a promotion because of your accomplishments.');
    break;
    case 5:
    console.log('Love is on its way.');
    break;
    case 6:
    console.log('Happinees comes from a good life.');
    break;
    case 7:
    console.log('love thy neighbour, just don\'t get caught');
    break;
    case 8:
    console.log('I have a dream.... Time to go to bed.');
    break;
    case 9:
    console.log('Your dynamic eyes have attracted a secret admirer.');
    break;
}

