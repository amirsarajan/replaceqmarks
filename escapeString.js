function escapeString(riddle) {
    function findFirstAvailableLetter() {
        let availLetterIndex = 0;
        while (availLetterIndex < letters.length &&
            unavailLetters.has(letters[availLetterIndex]))
            availLetterIndex++;
        return  letters[availLetterIndex];
    }
    
    const letters = Array.from('abcdefghijklmnopqrstuvwxyz');
    const unavailLetters = new Set();

    let qmarkIndex = riddle.indexOf('?');
    while (qmarkIndex >= 0) {
        part1 = riddle.substring(0, qmarkIndex);
        part2 = riddle.substring(qmarkIndex + 1);

        if (part1.length > 0)
            unavailLetters.add(part1[part1.length - 1]);
        if (part2.length > 0)
            unavailLetters.add(part2[0]);

        let availLetter = findFirstAvailableLetter();       

        riddle = part1 + availLetter + part2;

        unavailLetters.clear();
        qmarkIndex = riddle.indexOf('?');
    }
    return riddle;   
}

module.exports = escapeString