function execute(someFunction, value) {
    someFunction(value);
}

function write(word) {
    console.log(word);
}

execute(write, "Hello w3cschool");

const fs = require("fs");
fs.readFile('./input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("程序执行结束!");