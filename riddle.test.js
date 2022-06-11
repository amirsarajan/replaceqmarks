function solution(riddle) {
    let letters = Array.from('abcdefghijklmnopqrstuvwxyz');
    let unavailableSet = new Set();

    let qmarkIndex = riddle.indexOf('?');
    while (qmarkIndex >= 0) {
        part1 = riddle.substring(0, qmarkIndex);
        part2 = riddle.substring(qmarkIndex + 1);

        if (part1.length > 0)
            unavailableSet.add(part1[part1.length - 1]);
        if (part2.length > 0)
            unavailableSet.add(part2[0]);

        let availableLetterIndex = 0;
        while (availableLetterIndex < letters.length &&
            unavailableSet.has(letters[availableLetterIndex])) availableLetterIndex++;       

        riddle = part1 + letters[availableLetterIndex] + part2;

        unavailableSet.clear();
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