const escapeString = require("./escapeString");

test("returns riddle when no qmark", () => {
    expect(escapeString("abcd")).toBe("abcd");
})
test("replace the single '?' with 'a'", () => {
    expect(escapeString("?")).toBe("a");
})
test("replace just one qmark with next non-adjacent charachetr", () => {
    expect(escapeString("b?")).toBe("ba");
    expect(escapeString("?b")).toBe("ab");
    expect(escapeString("a?b")).toBe("acb");
    expect(escapeString("c?d")).toBe("cad");
    expect(escapeString("b?f")).toBe("baf");
})
test("replace two distant qmark with non-adjacent charachetr", () => {
    expect(escapeString("a?bc?b")).toBe("acbcab");
    expect(escapeString("c?d")).toBe("cad");
    expect(escapeString("b?f")).toBe("baf");
})

test("replaces ?? with ab", () => {
    expect(escapeString("??")).toBe("ab");
})