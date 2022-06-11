function solution(riddle) {
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

        let availLetterIndex = 0;
        while (availLetterIndex < letters.length &&
            unavailLetters.has(letters[availLetterIndex])) availLetterIndex++;       

        riddle = part1 + letters[availLetterIndex] + part2;

        unavailLetters.clear();
        qmarkIndex = riddle.indexOf('?');
    }
    return riddle;
}

test("returns riddle when no qmark", () => {
    expect(solution("abcd")).toBe("abcd");
})
test("replace the single '?' with 'a'", () => {
    expect(solution("?")).toBe("a");
})
test("replace just one qmark with next non-adjacent charachetr", () => {
    expect(solution("b?")).toBe("ba");
    expect(solution("?b")).toBe("ab");
    expect(solution("a?b")).toBe("acb");
    expect(solution("c?d")).toBe("cad");
    expect(solution("b?f")).toBe("baf");
})
test("replace two distant qmark with non-adjacent charachetr", () => {
    expect(solution("a?bc?b")).toBe("acbcab");
    expect(solution("c?d")).toBe("cad");
    expect(solution("b?f")).toBe("baf");
})

test("replaces ?? with ab", () => {
    expect(solution("??")).toBe("ab");
})