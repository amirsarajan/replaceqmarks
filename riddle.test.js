function solution(riddle) {
    if (riddle.indexOf('?') < 0)
        return riddle;

    let lettersSet = new Set(Array.from('abcdefghijklmnopqrstuvwxyz'));
    let qmarkIndex = riddle.indexOf("?");

    part1 = riddle.substring(0, qmarkIndex);
    part2 = qmarkIndex < riddle.length - 1 ?
        riddle.substring(qmarkIndex + 1) : '';

    if (part1.length > 0)
        lettersSet.delete(part1[part1.length - 1]);
    if (part2.length > 0)
        lettersSet.delete(part2[0]);
    let [firstAvailChar] = lettersSet;
    let newRiddle = part1 + firstAvailChar + part2;
    return solution(newRiddle);
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