function outerFunction() {
    let name = "Mozilla"; // let is block scoped
    function innerFunction() {
        console.log(name); 
    }
    return innerFunction();
}
let innerOutput = outerFunction();
innerOutput();