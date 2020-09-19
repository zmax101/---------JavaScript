let words = [
    'программа',
    'макака',
    'прекрасный',
    'оладушек',
    'собака',
    'клетка',
    'машины',
    'анкета',
    'спина',
    'гимнастика',
    'голова',
    'плита',
    'дескриптор',
];
let word = words[Math.floor(Math.random() * words.length)];

let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = '_';
}
let remainingLetters = word.length;

while (remainingLetters > 0) {
    alert(answerArray.join(' '));

    let guess = prompt('Угадайте букву или нажмите "отмена" для выхода из игры.');
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert('Пожалуйста, введите только одну букву.');
    } else {
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}
alert(answerArray.join(' '));
alert('Отлично! Было загадано слово ' + word);