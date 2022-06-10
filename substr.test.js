test("substr with zero length returns empty",()=>{
 expect("test".substring(0,0)).toBe("")
 expect("?b".substring(1,3)).toBe("b")
})