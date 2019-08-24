// exercise 1
let figure = "#";
    console.log(figure);
    console.log(figure + "#" + "#");
    console.log(figure + "#" +"#" + "#");
    console.log(figure + "#" + "#" + "#" + "#");
    console.log(figure + "#" + "#" + "#" + "#" + "#");
    console.log(figure + "#" + "#" + "#" + "#" + "#" + "#" + "#");
    console.log(figure + "#" + "#" + "#" + "#" + "#" + "#" + "#" + "#");

// exercise 2
// printing numbers from 1 to 100
for (let number = 1; number <= 100; number ++) {
    let output ="";
    //determining numbers divisible by 3 and 5
    if (number % 3 == 0) output = output + "Fizz"; 
    if (number % 5 == 0) output = output + "Buzz"; 
    // if (number % 3 == 0 && number % 5 == 0) output = output + "FizzBuzz"; 
    console.log(output || number);
};

// exercise 3
let size = 8;
    let board = "";
    
    // telling the board to add a new line if y is less than size
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            if ((x + y) % 2 == 0) {
                board += " ";
            } else {
                board += "#";
            }
        }
        board += "\n";
    }
    console.log(board);
    //i don't really understand the third exercise even though i managed to make it work somehow